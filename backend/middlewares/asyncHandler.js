//asyncHandler is a smart way to handle errors in async route handlers without repetitive try/catch blocks.
/*
Takes an async function (fn) as an argument.
Executes it and automatically catches errors, passing them to the response handler.
Prevents the app from crashing due to unhandled promise rejections.
*/

const asyncHandler = (fn) => (req,res,next) => {
  Promise.resolve(fn(req,res,next)).catch(error => {
    res.status(500).json({message: error.message});
  });
};

export default asyncHandler;