import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GetStartedButton = styled(Button)({
  borderRadius: "0px 5px 5px 0px",
  background: "#DE0687",
  whiteSpace: "nowrap",
  color: "#fff",
  "&:hover": {
    background: "#DE0687",
  },
  paddingRight: "4%",
  paddingLeft: "4%",
  textTransform: "capitalize",
});
