import { useState } from 'react'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Chip,
  InputAdornment,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'

type FileRecord = {
  name: string
  location: string
  modified: string
  size: string
  kind: 'folder' | 'document' | 'image'
}

const sampleFiles: FileRecord[] = [
  { name: '产品资料', location: '我的文件', modified: '2026/10/12', size: '—', kind: 'folder' },
  { name: '项目计划.docx', location: '我的文件', modified: '2026/10/11', size: '248 KB', kind: 'document' },
  { name: '界面草图.png', location: '设计素材', modified: '2026/10/10', size: '1.8 MB', kind: 'image' },
  { name: '会议记录.docx', location: '产品资料', modified: '2026/10/08', size: '96 KB', kind: 'document' },
  { name: '品牌素材.png', location: '设计素材', modified: '2026/10/05', size: '3.2 MB', kind: 'image' },
]

function FileKindIcon({ kind }: { kind: FileRecord['kind'] }) {
  if (kind === 'folder') return <FolderRoundedIcon color="primary" />
  if (kind === 'image') return <ImageOutlinedIcon color="secondary" />
  return <DescriptionOutlinedIcon color="action" />
}

function FileManagerPage() {
  const [query, setQuery] = useState('')
  const visibleFiles = sampleFiles.filter((file) =>
    `${file.name} ${file.location}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()),
  )

  return (
    <Stack spacing={3} sx={{ maxWidth: 1240, mx: 'auto' }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{
          alignItems: { xs: 'stretch', sm: 'center' },
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography component="h1" sx={{ fontWeight: 700 }} variant="h4">
            我的文件
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 0.5 }} variant="body2">
            浏览工作区中的文件和文件夹
          </Typography>
        </Box>
        <Chip label="示例数据" size="small" variant="outlined" />
      </Stack>

      <Paper variant="outlined" sx={{ overflow: 'hidden' }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          sx={{
            alignItems: { xs: 'stretch', sm: 'center' },
            justifyContent: 'space-between',
            px: 2.5,
            py: 2,
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Typography sx={{ fontWeight: 700 }} variant="subtitle2">
            最近更新
          </Typography>
          <TextField
            aria-label="搜索文件和文件夹"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索文件"
            size="small"
            value={query}
            sx={{ width: { xs: '100%', sm: 260 } }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Stack>
        <TableContainer>
          <Table aria-label="文件列表" sx={{ minWidth: 620 }}>
            <TableHead>
              <TableRow>
                <TableCell>名称</TableCell>
                <TableCell>位置</TableCell>
                <TableCell>修改日期</TableCell>
                <TableCell align="right">大小</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleFiles.map((file) => (
                <TableRow hover key={file.name}>
                  <TableCell>
                    <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
                      <FileKindIcon kind={file.kind} />
                      <Typography sx={{ fontWeight: 600 }} variant="body2">
                        {file.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography color="text.secondary" variant="body2">
                      {file.location}
                    </Typography>
                  </TableCell>
                  <TableCell>{file.modified}</TableCell>
                  <TableCell align="right">{file.size}</TableCell>
                </TableRow>
              ))}
              {visibleFiles.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4}>
                    <Box sx={{ py: 5, textAlign: 'center' }}>
                      <Typography color="text.secondary" variant="body2">
                        没有找到匹配的文件
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Stack>
  )
}

export default FileManagerPage
