const marker = require('@ajar/marker')
const{White,Reset,Red} = marker.constants;
const { NODE_ENV } = process.env;

//  logging all errors and forwarding them next(err)
const error_logger =  (err, req, res, next) => {
    marker.error(err);
    next(err)
}
const api_error_handler =  (err, req, res, next) => { 
  if (!req.xhr) return next(err)
  if(NODE_ENV === 'development')
    res.status(500).json({status:err.message,stack:err.stack})
  else
    res.status(500).json({status:'internal server error...'})
}
const browser_error_handler =  (err, req, res, next) => { 
    res.status(500).render('500', { 
      layout: false, 
      message: "Please try us again in a little while..." 
    });
}
const not_found =  (req, res) => {
  marker.info(`url: ${White}${req.url}${Reset}${Red} not found...`);
  if (req.xhr) res.status(404).json({status:`url: ${req.url} not found...`});
  else res.status(404).render('404', { layout: false, url: req.url });
}


module.exports = {
    error_logger,
    api_error_handler,
    browser_error_handler,
    not_found
}
  

