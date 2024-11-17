const ThankyouComponent = ({
  title = "Thankyou",
  description = "Your submission has been received successfully.",
  classes = "flex flex-col items-center justify-center",
}) => {
  return (
    <div className={`${classes}`}>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default ThankyouComponent;
