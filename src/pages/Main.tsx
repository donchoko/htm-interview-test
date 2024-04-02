import { useState } from 'react';
import { Property } from '../utils/utils';
import data from '../files/properties.json'
import { Grid } from '@mui/material';
import PropertyList from '../components/PropertyList';
import './Main.css';
import FilterBar from '../components/FilterBar';

const Main = () => {
  const sortByName =(a:string, b:string) => {
    return a > b ? 1 : b > a ? -1 : 0
  }
  const [items, setItems] = useState<Property[]>(data.sort((a: Property, b:Property) => sortByName(a.name, b.name)));
  return (
    <>
    <Grid container className="main" direction="row" justifyContent="center"> 
      <Grid item md={8} className='content searchFilter' justifyContent={"space-evenly"}>
        <FilterBar data={data} items={items}  setItems={setItems}/>
      </Grid>
      <Grid item className='content'>
        <PropertyList items={items}/>
      </Grid>
    </Grid>
    </>
  );
}

export default Main;