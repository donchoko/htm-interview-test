import { useTheme } from '@mui/material/styles';
import { Property } from '../utils/utils';
import { ImageList, ImageListItem, ImageListItemBar, Tooltip, useMediaQuery } from '@mui/material';
import './PropertyList.css';

interface PropertyListProps {
    items: Property[];
    setSelectedProperty: (p: Property) => void;
}

const PropertyList = ({ items, setSelectedProperty}: PropertyListProps) => {
    const theme = useTheme();
    const query = useMediaQuery(theme.breakpoints.down('sm'));

    const selectProperty = (property: Property) => {
       setSelectedProperty(property);
    };

    return (
        <>
            {items && items.length > 0 &&
                <ImageList cols={query ? 1 : 3} gap={50}>
                    {items.map((item: Property) => {
                        return (
                            <ImageListItem key={item.id} className='imageListItem' onClick={() => selectProperty(item)}>
                                <img
                                    src={item.mainImage}
                                    alt={item.name}
                                    loading="lazy"
                                    className='imageItem'
                                />
                                {query
                                    ? <div>
                                        <ImageListItemBar
                                            title={<b>{item.name}</b>}
                                            subtitle={item.description}
                                            position="below"
                                            className='titleBar'
                                        />
                                    </div>
                                    : <Tooltip
                                        title={item.description}
                                        placement="top"
                                        PopperProps={{
                                            disablePortal: true,
                                            popperOptions: {
                                                modifiers: [
                                                    {
                                                        enabled: false
                                                    }
                                                ]
                                            }
                                        }}
                                    >
                                        <div>
                                            <ImageListItemBar
                                                title={<b>{item.name}</b>}
                                                subtitle={item.description}
                                                position="below"
                                                className='titleBar'
                                            />
                                        </div>
                                    </Tooltip>
                                }

                            </ImageListItem>
                        )
                    })}
                </ImageList>
            }
        </>
    );
}

export default PropertyList;