import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Autosearch(props) {
    <Autocomplete
        freSolo
        id="free-solo"
        disableClearable
        option={URLSearchParams.data.map(option => option.text)}
        renderInput={(params) => (
            <TextField
                {...params}
                label="Въведете адрес"
                margin="normal"
                variant="outlined"
                InputProps={{...params.InputProps, type}}
                />
        )}
    />
}