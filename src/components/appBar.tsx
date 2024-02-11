import {
  AppBar as MUIAppBar,
  Box,
  Stack,
  Toolbar,
  Typography,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

export type ASILayoutProps = {
  children: ReactNode;
};
export const AppBar: React.FC<ASILayoutProps> = (props) => {
  const { children } = props;
  return (
    <Stack height="100vh">
      <MUIAppBar position="fixed">
        <Toolbar>
          <Stack
            direction="row"
            sx={{
              "@media (min-width: 600px)": {
                justifyContent: "space-between",
              },
              "@media (max-width: 600px)": {
                paddingTop: 2,
              },
            }}
            flex={1}
          >
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Typography variant="h4" alignSelf="center">
                Voting For Board
              </Typography>
              <Box width={16} />
              <MenuItem sx={{ p: 2 }} component={Link} to="/">
                Result
              </MenuItem>
              <MenuItem sx={{ p: 2 }} component={Link} to="/create">
                Create
              </MenuItem>
              <MenuItem sx={{ p: 2 }} component={Link} to="/vote">
                Vote Form
              </MenuItem>
            </Stack>
          </Stack>
        </Toolbar>
      </MUIAppBar>
      <Box height="64px" />
      <Box overflow="auto" flex={1} sx={{ backgroundColor: "#e4e4e4" }}>
        {children}
      </Box>
    </Stack>
  );
};
