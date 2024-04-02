import { useTheme } from '@mui/material/styles';
import { Property } from '../utils/utils';
import { ImageList, ImageListItem, ImageListItemBar, Tooltip, useMediaQuery } from '@mui/material';
import './PropertyList.css';

interface PropertyListProps {
    items: Property[]
}

const PropertyList = ({ items }: PropertyListProps) => {
    const theme = useTheme();
    const query = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            {items ?
                <ImageList cols={query ? 1 : 3} gap={50}>
                    {items.map((item: Property) => {
                        return (
                            <ImageListItem key={item.id} className='imageListItem'>
                                <img
                                    src="https://storefront.htmniseko.com/skye/1263/thumbnail_1.jpg"
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
                </ImageList> :
                <div>No items to display</div>
            }
        </>
    );
}

export default PropertyList;