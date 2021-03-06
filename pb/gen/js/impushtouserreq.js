/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.Server.IMPushToUserReq');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.IM.BaseDefine.UserTokenInfo');


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
proto.IM.Server.IMPushToUserReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.IM.Server.IMPushToUserReq.repeatedFields_, null);
};
goog.inherits(proto.IM.Server.IMPushToUserReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.Server.IMPushToUserReq.displayName = 'proto.IM.Server.IMPushToUserReq';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.IM.Server.IMPushToUserReq.repeatedFields_ = [3];



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
proto.IM.Server.IMPushToUserReq.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.Server.IMPushToUserReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.Server.IMPushToUserReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Server.IMPushToUserReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    flash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userTokenListList: jspb.Message.toObjectList(msg.getUserTokenListList(),
    proto.IM.BaseDefine.UserTokenInfo.toObject, includeInstance)
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
 * @return {!proto.IM.Server.IMPushToUserReq}
 */
proto.IM.Server.IMPushToUserReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.Server.IMPushToUserReq;
  return proto.IM.Server.IMPushToUserReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.Server.IMPushToUserReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.Server.IMPushToUserReq}
 */
proto.IM.Server.IMPushToUserReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFlash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 3:
      var value = new proto.IM.BaseDefine.UserTokenInfo;
      reader.readMessage(value,proto.IM.BaseDefine.UserTokenInfo.deserializeBinaryFromReader);
      msg.addUserTokenList(value);
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
proto.IM.Server.IMPushToUserReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.Server.IMPushToUserReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.Server.IMPushToUserReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Server.IMPushToUserReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserTokenListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.IM.BaseDefine.UserTokenInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string flash = 1;
 * @return {string}
 */
proto.IM.Server.IMPushToUserReq.prototype.getFlash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.IM.Server.IMPushToUserReq.prototype.setFlash = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string data = 2;
 * @return {string}
 */
proto.IM.Server.IMPushToUserReq.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.IM.Server.IMPushToUserReq.prototype.setData = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated IM.BaseDefine.UserTokenInfo user_token_list = 3;
 * @return {!Array.<!proto.IM.BaseDefine.UserTokenInfo>}
 */
proto.IM.Server.IMPushToUserReq.prototype.getUserTokenListList = function() {
  return /** @type{!Array.<!proto.IM.BaseDefine.UserTokenInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.IM.BaseDefine.UserTokenInfo, 3));
};


/** @param {!Array.<!proto.IM.BaseDefine.UserTokenInfo>} value */
proto.IM.Server.IMPushToUserReq.prototype.setUserTokenListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.IM.BaseDefine.UserTokenInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.IM.BaseDefine.UserTokenInfo}
 */
proto.IM.Server.IMPushToUserReq.prototype.addUserTokenList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.IM.BaseDefine.UserTokenInfo, opt_index);
};


proto.IM.Server.IMPushToUserReq.prototype.clearUserTokenListList = function() {
  this.setUserTokenListList([]);
};


