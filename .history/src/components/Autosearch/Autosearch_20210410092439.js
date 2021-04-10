import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Autosearch(props) {
    return (
        <div style={{ width: 300 }}>
        <Autocomplete
        freSolo
        id="free-solo"
        disableClearable
        option={props.data.map(option => option.text)}
        renderInput={(params) => (
            <TextField
                {...params}
                label="Въведете адрес"
                margin="normal"
                variant="outlined"
                InputProps={{...params.InputProps, type: 'search'}}
                />
        )}
    />

    </div>
    )
}