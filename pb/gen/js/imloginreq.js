/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.Login.IMLoginReq');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.IM.BaseDefine.ClientType');
goog.forwardDeclare('proto.IM.BaseDefine.UserStatType');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IM.Login.IMLoginReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IM.Login.IMLoginReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.Login.IMLoginReq.displayName = 'proto.IM.Login.IMLoginReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IM.Login.IMLoginReq.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.Login.IMLoginReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.Login.IMLoginReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Login.IMLoginReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    userName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    onlineStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    clientType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    clientVersion: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IM.Login.IMLoginReq}
 */
proto.IM.Login.IMLoginReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.Login.IMLoginReq;
  return proto.IM.Login.IMLoginReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.Login.IMLoginReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.Login.IMLoginReq}
 */
proto.IM.Login.IMLoginReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {!proto.IM.BaseDefine.UserStatType} */ (reader.readEnum());
      msg.setOnlineStatus(value);
      break;
    case 4:
      var value = /** @type {!proto.IM.BaseDefine.ClientType} */ (reader.readEnum());
      msg.setClientType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IM.Login.IMLoginReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.Login.IMLoginReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.Login.IMLoginReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Login.IMLoginReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOnlineStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getClientType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getClientVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string user_name = 1;
 * @return {string}
 */
proto.IM.Login.IMLoginReq.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.IM.Login.IMLoginReq.prototype.setUserName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.IM.Login.IMLoginReq.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.IM.Login.IMLoginReq.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional IM.BaseDefine.UserStatType online_status = 3;
 * @return {!proto.IM.BaseDefine.UserStatType}
 */
proto.IM.Login.IMLoginReq.prototype.getOnlineStatus = function() {
  return /** @type {!proto.IM.BaseDefine.UserStatType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.IM.BaseDefine.UserStatType} value */
proto.IM.Login.IMLoginReq.prototype.setOnlineStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional IM.BaseDefine.ClientType client_type = 4;
 * @return {!proto.IM.BaseDefine.ClientType}
 */
proto.IM.Login.IMLoginReq.prototype.getClientType = function() {
  return /** @type {!proto.IM.BaseDefine.ClientType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.IM.BaseDefine.ClientType} value */
proto.IM.Login.IMLoginReq.prototype.setClientType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string client_version = 5;
 * @return {string}
 */
proto.IM.Login.IMLoginReq.prototype.getClientVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.IM.Login.IMLoginReq.prototype.setClientVersion = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


