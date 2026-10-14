import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'

export const navigationSections = [
  {
    label: '工作区',
    items: [{ label: '文件管理', to: '/files', icon: FolderOutlinedIcon }],
  },
] as const