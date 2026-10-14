import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <Box
      component="main"
      sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', p: 3 }}
    >
      <Paper variant="outlined" sx={{ width: 'min(100%, 440px)', p: { xs: 3, sm: 4 } }}>
        <Stack spacing={2}>
          <Typography color="primary.main" variant="overline">
            404
          </Typography>
          <Typography component="h1" sx={{ fontWeight: 700 }} variant="h4">
            页面不存在
          </Typography>
          <Typography color="text.secondary" variant="body2">
            检查地址是否正确，或返回文件工作区。
          </Typography>
          <Button component={Link} to="/files" variant="contained" sx={{ alignSelf: 'flex-start' }}>
            返回文件管理
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}

export default NotFoundPage