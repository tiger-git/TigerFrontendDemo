import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import StorageRoundedIcon from '@mui/icons-material/StorageRounded'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { navigationSections } from '../app/navigation'

const drawerWidth = 248

function MainLayout() {
  const theme = useTheme()
  const location = useLocation()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeItem = navigationSections
    .flatMap((section) => section.items)
    .find((item) => location.pathname === item.to || location.pathname.startsWith(`${item.to}/`))

  const drawer = (
    <Box sx={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
      <Toolbar sx={{ gap: 1.5, px: 2.5 }}>
        <StorageRoundedIcon color="primary" />
        <Typography sx={{ fontWeight: 700 }} variant="subtitle1">
          TIGER DRIVE
        </Typography>
      </Toolbar>
      <Box component="nav" aria-label="主导航" sx={{ px: 1.5, pt: 2 }}>
        {navigationSections.map((section) => (
          <Box key={section.label} sx={{ mb: 2 }}>
            <Typography
              color="text.secondary"
              sx={{ px: 1.5, pb: 1, fontSize: 11, fontWeight: 700 }}
            >
              {section.label}
            </Typography>
            <List disablePadding>
              {section.items.map((item) => {
                const ItemIcon = item.icon
                return (
                  <ListItemButton
                    component={NavLink}
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    sx={{
                      minHeight: 42,
                      borderRadius: 1.5,
                      color: 'text.secondary',
                      '&.active': {
                        color: 'primary.dark',
                        bgcolor: 'primary.light',
                        '& .MuiListItemIcon-root': { color: 'primary.dark' },
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}>
                      <ItemIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                          {item.label}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                )
              })}
            </List>
          </Box>
        ))}
      </Box>
      <Box sx={{ mt: 'auto', px: 2.5, py: 2, borderTop: 1, borderColor: 'divider' }}>
        <Typography color="text.secondary" variant="caption">
          Tiger Drive · Web
        </Typography>
      </Box>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          zIndex: (currentTheme) => currentTheme.zIndex.drawer + 1,
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          boxShadow: 'none',
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ minHeight: '64px !important', gap: 1 }}>
          {isMobile && (
            <IconButton
              aria-label="打开导航菜单"
              edge="start"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography color="text.primary" sx={{ fontWeight: 600 }} variant="subtitle1">
            {activeItem?.label ?? '工作区'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={!isMobile || mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: 1,
            borderColor: 'divider',
            bgcolor: '#f1f5f1',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, minWidth: 0, p: { xs: 2, sm: 3, lg: 4 } }}>
        <Toolbar sx={{ minHeight: '64px !important' }} />
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
