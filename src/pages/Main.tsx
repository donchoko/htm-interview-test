import { useEffect, useState } from 'react';
import { Property } from '../utils/utils';
import data from '../files/properties.json'
import { Grid, Modal } from '@mui/material';
import PropertyList from '../components/PropertyList';
import './Main.css';
import FilterBar from '../components/FilterBar';
import PropertyCard from '../components/PropertyCard';
import notFoundImage from '../files/notFoundImage.svg';

const Main = () => {
  const sortByName = (a: string, b: string) => {
    return a > b ? 1 : b > a ? -1 : 0
  }
  const [items, setItems] = useState<Property[]>(data.sort((a: Property, b: Property) => sortByName(a.name, b.name)));
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>();

  const handleModalOnCLose = () => {
    setOpen(false);
    setSelectedProperty(null);
  }
  useEffect(() => {
    if (selectedProperty) {
      setOpen(true);
    }
  }, [selectedProperty])

  return (
    <>
      <Grid container className="main" direction="row" justifyContent="center">
        <Grid item md={8} className='content searchFilter' justifyContent={"space-evenly"}>
          <FilterBar data={data} items={items} setItems={setItems} />
        </Grid>
        {items && items.length > 0
          ? <Grid item className='content'>
            <PropertyList items={items} setSelectedProperty={setSelectedProperty} />
          </Grid>
          : <Grid container justifyContent={"center"}><img className="notFound" src={notFoundImage} alt="not-found" /></Grid>
        }


      </Grid>
      <Modal
        open={open}
        onClose={handleModalOnCLose}
        className='modal'
      >
        <PropertyCard selectedProperty={selectedProperty} />
      </Modal>
    </>
  );
}

export default Main;