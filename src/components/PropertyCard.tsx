import { Property } from '../utils/utils';
import { Card, CardContent, Typography } from '@mui/material';

type PropertyCardProps = {
  selectedProperty?: Property | null | undefined;
}

const PropertyCard = ({selectedProperty}: PropertyCardProps) => {
  return (
    <Card sx={{ maxWidth: "50%" }}>
    <div >
      <img
        src={selectedProperty?.mainImage}
        alt={selectedProperty?.name}
        loading="lazy"
        className='cardImage'
      />
    </div>
    

    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {selectedProperty?.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {selectedProperty?.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Rooms: ${selectedProperty?.gradeSort} `}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Beds: ${selectedProperty?.bedConfigurations.length} `}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {`Bathrooms: ${selectedProperty?.bathrooms} `}
      </Typography>
    </CardContent>
  </Card>
  );
}

export default PropertyCard;