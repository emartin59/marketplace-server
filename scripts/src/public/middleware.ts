import * as express from "express";
import * as bearerToken from "express-bearer-token";
import * as httpContext from "express-http-context";

import { logRequest, reportMetrics, requestLogger, setHttpContextFromRequest } from "../middleware";

export { notFoundHandler, generalErrorHandler, statusHandler } from "../middleware";

export function init(app: express.Express) {
	app.use(httpContext.middleware as express.RequestHandler);
	app.use(setHttpContextFromRequest);
	app.use(bearerToken());
	app.use(requestLogger);
	app.use(logRequest);
	app.use(reportMetrics);
}
