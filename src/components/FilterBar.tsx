import { useEffect, useState } from 'react';
import { Property } from '../utils/utils';
import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

interface FilterBarProps {
    data: Property[];
    items: Property[];
    setItems: (items: Property[]) => void;
}

enum searchPriority {
    ALL = 0,
    TITLE = 1,
    DESCRIPTION = 2
}

const MAX_ROOM_FILTER = 10

const FilterBar = ({ data, items, setItems }: FilterBarProps) => {
    const [search, setSearch] = useState<string>("")
    const [rooms, setRoom] = useState<number>(0)
    const [priority, setPriority] = useState<searchPriority>(searchPriority.ALL)

    const onChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const onSelectRooms = (event: SelectChangeEvent<number>) => {
        setRoom(event.target.value as number);
    }

    const onSelectPriority = (event: SelectChangeEvent<searchPriority>) => {
        console.log(event.target.value)
        setPriority(event.target.value as searchPriority);
    }

    const filterProperties = (
        items: Property[],
        search: string,
        rooms: number,
        priority: searchPriority,
        setItems: (items: Property[]) => void,
    ): void => {
        //If no items loaded, no filter applied
        if (!items) return;

        //If no filters, reset the items list
        if (!search && rooms === 0){
            setItems(data);
            return
        };

        let newItems: Property[] = [...data];

        //Only filter text if search has a value
        if(search){
            newItems = newItems.filter((item: Property) => {
                //Filter text, depends on search priority dropdown
                switch (priority) {
                    case searchPriority.ALL:
                        return item.name.toUpperCase().includes(search.toUpperCase()) || item.description.includes(search.toUpperCase());
                    case searchPriority.TITLE:
                        return item.name.toUpperCase().includes(search.toUpperCase());
                    case searchPriority.DESCRIPTION:
                        return item.description.toUpperCase().includes(search.toUpperCase());
                    default:
                        return true;
                }
            })
        }

        //Filter by room number only if a room number is selected
        if (rooms !== 0) {
            newItems = newItems.filter((item) => item.gradeSort === rooms)
        }
        setItems(newItems)
    }

    useEffect(() => {
        filterProperties(items, search, rooms, priority, setItems)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, rooms, priority])

    const roomOptions = [
        { "label": "Any", value: 0 },
        ...Array.from(Array(MAX_ROOM_FILTER).keys()).map(i => ({ "label": (i+1).toString(), value: (i+1) }))
    ]

    const searchPriorityOptions = [
        { "label": "All", value: searchPriority.ALL },
        { "label": "Title", value: searchPriority.TITLE },
        { "label": "Description", value: searchPriority.DESCRIPTION },
    ]


    return (
        <Grid container justifyContent={"center"} spacing={2} sx={{flexDirection: { xs: "column", md: "row"}}}>
            <Grid item md={3} display={"flex"}>
                <p>Search properties: </p>
                <TextField value={search} onChange={onChangeSearchField} placeholder="Search... " fullWidth></TextField>
            </Grid>
            <Grid item md={2}>
                
                <FormControl fullWidth>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select value={priority} onChange={onSelectPriority} label='Category' labelId='category-label' fullWidth>
                        {searchPriorityOptions.map(i => <MenuItem key={i.value} value={i.value}>{i.label}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item md={2}>
                <FormControl fullWidth>
                    <InputLabel id="rooms-label">Rooms</InputLabel>
                    <Select value={rooms} onChange={onSelectRooms} label="Rooms" labelId='rooms-label' fullWidth>
                        {roomOptions.map(i => <MenuItem key={i.value} value={i.value}>{i.label}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default FilterBar;