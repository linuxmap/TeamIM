/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.BaseDefine.UserTokenInfo');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.IM.BaseDefine.ClientType');

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
proto.IM.BaseDefine.UserTokenInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IM.BaseDefine.UserTokenInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.BaseDefine.UserTokenInfo.displayName = 'proto.IM.BaseDefine.UserTokenInfo';
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
proto.IM.BaseDefine.UserTokenInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.BaseDefine.UserTokenInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.BaseDefine.UserTokenInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.BaseDefine.UserTokenInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    token: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pushCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pushType: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.IM.BaseDefine.UserTokenInfo}
 */
proto.IM.BaseDefine.UserTokenInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.BaseDefine.UserTokenInfo;
  return proto.IM.BaseDefine.UserTokenInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.BaseDefine.UserTokenInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.BaseDefine.UserTokenInfo}
 */
proto.IM.BaseDefine.UserTokenInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {!proto.IM.BaseDefine.ClientType} */ (reader.readEnum());
      msg.setUserType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPushCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPushType(value);
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
proto.IM.BaseDefine.UserTokenInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.BaseDefine.UserTokenInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.BaseDefine.UserTokenInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.BaseDefine.UserTokenInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUserType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPushCount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getPushType();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 user_id = 1;
 * @return {number}
 */
proto.IM.BaseDefine.UserTokenInfo.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IM.BaseDefine.UserTokenInfo.prototype.setUserId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ClientType user_type = 2;
 * @return {!proto.IM.BaseDefine.ClientType}
 */
proto.IM.BaseDefine.UserTokenInfo.prototype.getUserType = function() {
  return /** @type {!proto.IM.BaseDefine.ClientType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.IM.BaseDefine.ClientType} value */
proto.IM.BaseDefine.UserTokenInfo.prototype.setUserType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string token = 3;
 * @return {string}
 */
proto.IM.BaseDefine.UserTokenInfo.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.IM.BaseDefine.UserTokenInfo.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 push_count = 4;
 * @return {number}
 */
proto.IM.BaseDefine.UserTokenInfo.prototype.getPushCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.IM.BaseDefine.UserTokenInfo.prototype.setPushCount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 push_type = 5;
 * @return {number}
 */
proto.IM.BaseDefine.UserTokenInfo.prototype.getPushType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.IM.BaseDefine.UserTokenInfo.prototype.setPushType = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


