import { Card, CardContent, Typography, Stack, Chip, Divider } from "@mui/material"

export default function Cart(props) {
    const totalPrice = props.items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <>
            <Typography variant="h4" textAlign="center">Compras</Typography>
            {props.items.map((item) => (
                <Card key={item.id}>
                    <CardContent>
                        <Typography variant="h6">{item.product}</Typography>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6">Preço Unitário:</Typography>
                            <Chip
                                variant="outlined"
                                size="medium"
                                color="primary"
                                label={`R$ ${item.price}`}
                            />

                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6">Quantidade:</Typography>
                            <Chip
                                variant="outlined"
                                size="medium"
                                color="primary"
                                label={item.quantity}
                            />
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <Typography variant="h5">Preço:</Typography>
                            <Chip
                                variant="outlined"
                                size="medium"
                                color="primary"
                                label={item.price * item.quantity}
                            />
                        </Stack>
                    </CardContent>
                    <Divider />
                </Card >
            ))
            }
            <Stack direction="row" spacing={2}>
                <Typography variant="h4">Valor da Compra:</Typography>
                <Chip
                    variant="outlined"
                    size="medium"
                    color="primary"
                    label={totalPrice}
                />
            </Stack>
        </>
    )
}