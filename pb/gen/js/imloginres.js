/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.Login.IMLoginRes');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.IM.BaseDefine.UserInfo');

goog.forwardDeclare('proto.IM.BaseDefine.ResultType');
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
proto.IM.Login.IMLoginRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IM.Login.IMLoginRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.Login.IMLoginRes.displayName = 'proto.IM.Login.IMLoginRes';
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
proto.IM.Login.IMLoginRes.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.Login.IMLoginRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.Login.IMLoginRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Login.IMLoginRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    resultCode: jspb.Message.getFieldWithDefault(msg, 2, 0),
    resultString: jspb.Message.getFieldWithDefault(msg, 3, ""),
    onlineStatus: jspb.Message.getFieldWithDefault(msg, 4, 0),
    userInfo: (f = msg.getUserInfo()) && proto.IM.BaseDefine.UserInfo.toObject(includeInstance, f)
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
 * @return {!proto.IM.Login.IMLoginRes}
 */
proto.IM.Login.IMLoginRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.Login.IMLoginRes;
  return proto.IM.Login.IMLoginRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.Login.IMLoginRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.Login.IMLoginRes}
 */
proto.IM.Login.IMLoginRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setServerTime(value);
      break;
    case 2:
      var value = /** @type {!proto.IM.BaseDefine.ResultType} */ (reader.readEnum());
      msg.setResultCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResultString(value);
      break;
    case 4:
      var value = /** @type {!proto.IM.BaseDefine.UserStatType} */ (reader.readEnum());
      msg.setOnlineStatus(value);
      break;
    case 5:
      var value = new proto.IM.BaseDefine.UserInfo;
      reader.readMessage(value,proto.IM.BaseDefine.UserInfo.deserializeBinaryFromReader);
      msg.setUserInfo(value);
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
proto.IM.Login.IMLoginRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.Login.IMLoginRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.Login.IMLoginRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Login.IMLoginRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerTime();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getResultCode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getResultString();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOnlineStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getUserInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.IM.BaseDefine.UserInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 server_time = 1;
 * @return {number}
 */
proto.IM.Login.IMLoginRes.prototype.getServerTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IM.Login.IMLoginRes.prototype.setServerTime = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional IM.BaseDefine.ResultType result_code = 2;
 * @return {!proto.IM.BaseDefine.ResultType}
 */
proto.IM.Login.IMLoginRes.prototype.getResultCode = function() {
  return /** @type {!proto.IM.BaseDefine.ResultType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.IM.BaseDefine.ResultType} value */
proto.IM.Login.IMLoginRes.prototype.setResultCode = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string result_string = 3;
 * @return {string}
 */
proto.IM.Login.IMLoginRes.prototype.getResultString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.IM.Login.IMLoginRes.prototype.setResultString = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional IM.BaseDefine.UserStatType online_status = 4;
 * @return {!proto.IM.BaseDefine.UserStatType}
 */
proto.IM.Login.IMLoginRes.prototype.getOnlineStatus = function() {
  return /** @type {!proto.IM.BaseDefine.UserStatType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.IM.BaseDefine.UserStatType} value */
proto.IM.Login.IMLoginRes.prototype.setOnlineStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional IM.BaseDefine.UserInfo user_info = 5;
 * @return {?proto.IM.BaseDefine.UserInfo}
 */
proto.IM.Login.IMLoginRes.prototype.getUserInfo = function() {
  return /** @type{?proto.IM.BaseDefine.UserInfo} */ (
    jspb.Message.getWrapperField(this, proto.IM.BaseDefine.UserInfo, 5));
};


/** @param {?proto.IM.BaseDefine.UserInfo|undefined} value */
proto.IM.Login.IMLoginRes.prototype.setUserInfo = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.IM.Login.IMLoginRes.prototype.clearUserInfo = function() {
  this.setUserInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.IM.Login.IMLoginRes.prototype.hasUserInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


