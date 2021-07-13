import { createTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const theme = createTheme({
	palette : {
		primary : {
			main : orange[500],
		},
		background : {
			main : '#1E1E1E',
		},
	},
});

export default theme;