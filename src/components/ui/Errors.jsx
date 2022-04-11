import ErrorMessage from "./ErrorMessage";

const Errors = (props) => {
  //console.log(props);
  return (
    <>
      {props.error && (
        <div>
          {props.error.data?.data ? (
            props.error.data.data.map((err) => {
              //console.log(err);
              return (
                <ErrorMessage
                  key={Math.random().toString() + err.msg}
                  message={err.msg}
                />
              );
            })
          ) : (
            <ErrorMessage message={props.error.message} />
          )}
        </div>
      )}
    </>
  );
};

export default Errors;
