import {
  AppBar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import WelcomeMessage from './WelcomeMessage'
// import { Theme, createStyles } from '@mui/material'

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     positionSelect: {
//       color: 'white',
//       borderBottom: '1px solid white',
//     },
//   })
// )

const Navbar = () => {
  // styles
  //   const classes = useStyles()

  //state
  const [position, setPosition] = useState<string>('mobile development')

  //time
  const [time, setTime] = useState<Date>(() => new Date(Date.now()))

  //useEffect
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000)

    return () => clearInterval(timer)
  }, [])

  const onPositionChange = (event: SelectChangeEvent<string>) => setPosition(event.target.value)

  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        <Box display='flex' justifyContent='space-between' alignItems='center' width={1} py={2}>
          <Typography variant='h6'>My movies</Typography>
          <Box textAlign='center'>
            <WelcomeMessage position={position} />
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  //   className={classes.positionSelect}
                >
                  <MenuItem value='full-stack Development'>full-stack Development</MenuItem>
                  <MenuItem value='front-end Development'>front-end Development</MenuItem>
                  <MenuItem value='back-end Development'>back-end Development</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign='center'>
            <Box my={1}>
              <Typography variant='h6'>{time.toUTCString()}</Typography>
            </Box>
            <Button variant='contained'>Login</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
