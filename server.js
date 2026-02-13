const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = '0.0.0.0'
const port = parseInt(process.env.PORT, 10) || 3000

console.log(`[server] Starting... NODE_ENV=${process.env.NODE_ENV}, port=${port}, dev=${dev}`)
console.log(`[server] Node.js ${process.version}, Memory limit: ${Math.round(require('v8').getHeapStatistics().heap_size_limit / 1024 / 1024)}MB`)

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('[server] Error handling request:', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })

  server.listen(port, hostname, (err) => {
    if (err) throw err
    console.log(`[server] Ready on http://${hostname}:${port}`)
  })

  // Graceful shutdown
  process.on('SIGTERM', () => {
    console.log('[server] SIGTERM received, shutting down gracefully...')
    server.close(() => {
      console.log('[server] Server closed')
      process.exit(0)
    })
    // Force exit after 10 seconds
    setTimeout(() => process.exit(1), 10000)
  })

  process.on('SIGINT', () => {
    console.log('[server] SIGINT received, shutting down...')
    server.close(() => process.exit(0))
    setTimeout(() => process.exit(1), 10000)
  })
}).catch((err) => {
  console.error('[server] Failed to prepare Next.js app:', err)
  process.exit(1)
})

// Handle uncaught errors to prevent silent crashes
process.on('uncaughtException', (err) => {
  console.error('[server] Uncaught exception:', err)
})

process.on('unhandledRejection', (reason) => {
  console.error('[server] Unhandled rejection:', reason)
})
