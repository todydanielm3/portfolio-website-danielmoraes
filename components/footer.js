import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Daniel Moraes. All Rights Reserved.
    </Box>
  )
}

export default Footer
