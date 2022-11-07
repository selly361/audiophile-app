import {
  NewProductTag,
  ProductDesc,
  ProductName,
  StyledArticle,
  StyledButton,
} from "./heroIntro-styles";

const HeroIntro = () => {
  return (
    <StyledArticle>
      <NewProductTag>NEW PRODUCT</NewProductTag>
      <ProductName>XX99 Mark II HeadphoneS</ProductName>
      <ProductDesc>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </ProductDesc>
      <StyledButton to="/headphones/xx99-mark-two-headphones">SEE PRODUCT</StyledButton>
    </StyledArticle>
  );
};

export default HeroIntro;
