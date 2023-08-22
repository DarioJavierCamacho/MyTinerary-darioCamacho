import React from 'react'
import {Link as Anchor} from 'react-router-dom'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const DetailsCard = ({detailsCity}) => {
  return (
    <Card className="my-10 w-4/5 mx-auto overflow-hidden">
            <CardHeader color="blue-gray" className="h-2/5 mt-0 mx-0 rounded-none ">
                <img
                    src={detailsCity.photo}
                    alt="card-image"
                    className='object-cover h-full w-full max-h-[500px]'
                />
            </CardHeader>
            <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
           {detailsCity.country}
        </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                   {detailsCity.city}
                </Typography>
                <Typography>
                   {detailsCity.description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Anchor to="/cities"><Button>Back to cities</Button></Anchor>
            </CardFooter>
        </Card>
  )
}

export default DetailsCard