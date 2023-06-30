import { Stack, Box, Typography, IconButton } from "@mui/material";
import Image from "../Image";
import { formatNumberToCurrency } from "@/common/utils/common.utils";

type Props = {
  title?: string;
  property?: string;
  srcImg?: string;
  price?: number;
};

export const ProductItemDefault = (props: Props) => {
  const { title, property, srcImg, price } = props;
  return (
    <Stack
      sx={{
        height: "423px",
        width: "100%",
        justifyContent: "space-between",
        borderRadius: "24px",
        border: "1px solid #E1E2E6",
        boxShadow: "0px 14px 21px rgba(218, 218, 218, 0.15)",
        ':hover':{
          backgroundColor: "#D8C4B6",
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          borderRadius: "24px",
          height: "57%",
          width: "100%",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${srcImg})`,
          backgroundColor: "white",
        }}
      />
      <Stack
        sx={{
          paddingBottom: "27px",
          px: "24px",
        }}
        width={"100%"}
      >
        <Stack>
          <Typography
            fontSize={24}
            fontWeight={700}
            lineHeight={"24px"}
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            {title}
          </Typography>
          <Typography
            fontSize={18}
            color={"#98A1B3"}
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            {property}
          </Typography>
        </Stack>
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Typography
            fontSize={24}
            color={"#1F8A70"}
            fontWeight={700}
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "70%",
            }}
          >
            {formatNumberToCurrency(price)}
          </Typography>
          <IconButton
            sx={{
              background: "linear-gradient(90deg, #66BA7A , #00A55D, #1F8A70)",
              ":hover": {
                background: "black",
              },
            }}
          >
            <Image
              sx={{ width: "32px", height: "32px" }}
              src={"/assets/icons/core/add-to-cart.svg"}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
