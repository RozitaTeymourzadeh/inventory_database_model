// https://http.cat/409
const errorTypes = {
 ValidatetionError: 422,
 UniqueViolationError: 409,
};

const errorMessages = {
    UniqueViolationError: 'Invalid: must be a unique value!',
};

function notFound(req, res, next){
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

function errorHandler(error, req, res, next){
    const statusCode = res.statusCode === 200 
      ? (errorTypes[error.name] || 500) 
      : res.statusCode;
    res.status(statusCode);
    res.json({
        status: statusCode,
        message: errorMessages[error.name] || error.massage,
        stack: process.env.NODE_ENV === 'production'? '🧤' : error.stack,
        errors: error.errors || undefined,
    });
}

module.exports = {
    notFound,
    errorHandler,
}