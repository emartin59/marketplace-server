import { Event, EventData } from "../index";
import { Common, create as createCommon } from "./common";

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * User login failed
 */
export interface UserLoginServerFailed extends EventData {
	event_name: "user_login_server_failed";
	event_type: "business";
	common: Common;
	error_reason: string;
}

export function create(user_id: string, error_reason: string): Event<UserLoginServerFailed> {
	return new Event<UserLoginServerFailed>({
		event_name: "user_login_server_failed",
		event_type: "business",
		common: createCommon(user_id),
		error_reason
	});
}
