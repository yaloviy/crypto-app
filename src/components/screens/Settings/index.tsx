import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabPanelProps } from '../../../common/types/tabs';

import { useTheme } from '@mui/material'
import { tokens } from '../../../theme';
import SettingsPersonalInfoComponent from '../../common components/personalInfo';
import { useAppDispatch } from '../../../utils/hook/hook';
import { getPublicUser } from '../../store/thrunks/auth';
import ChangePasswordComponent from '../../common components/changePassword';
import DeleteUserComponent from '../../common components/delete-user';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SettingsPage = () =>  {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = useTheme()

  const colors = tokens(theme.palette.mode)



  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example"
            centered 
            textColor='secondary'
            TabIndicatorProps={{
                style: {
                    backgroundColor: colors.blue
                }
            }}
            sx={{height: '100%'}}
        >
          <Tab sx={{height: '100%'}} label="Персональные данные" {...a11yProps(0)} />
          <Tab label="Смена пароля" {...a11yProps(1)} />
          <Tab label="Удалить аккаунт" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SettingsPersonalInfoComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChangePasswordComponent />
      </TabPanel> 
      <TabPanel value={value} index={2}>
        <DeleteUserComponent />
      </TabPanel> 
    </Box>
  );
}


export default SettingsPage;