/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.Buddy.IMPCLoginStatusNotify');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.IM.Buddy.IMPCLoginStatusNotify = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IM.Buddy.IMPCLoginStatusNotify, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.Buddy.IMPCLoginStatusNotify.displayName = 'proto.IM.Buddy.IMPCLoginStatusNotify';
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
proto.IM.Buddy.IMPCLoginStatusNotify.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.Buddy.IMPCLoginStatusNotify.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.Buddy.IMPCLoginStatusNotify} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Buddy.IMPCLoginStatusNotify.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    loginStat: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.IM.Buddy.IMPCLoginStatusNotify}
 */
proto.IM.Buddy.IMPCLoginStatusNotify.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.Buddy.IMPCLoginStatusNotify;
  return proto.IM.Buddy.IMPCLoginStatusNotify.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.Buddy.IMPCLoginStatusNotify} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.Buddy.IMPCLoginStatusNotify}
 */
proto.IM.Buddy.IMPCLoginStatusNotify.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.IM.BaseDefine.UserStatType} */ (reader.readEnum());
      msg.setLoginStat(value);
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
proto.IM.Buddy.IMPCLoginStatusNotify.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.Buddy.IMPCLoginStatusNotify.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.Buddy.IMPCLoginStatusNotify} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Buddy.IMPCLoginStatusNotify.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLoginStat();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint32 user_id = 1;
 * @return {number}
 */
proto.IM.Buddy.IMPCLoginStatusNotify.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IM.Buddy.IMPCLoginStatusNotify.prototype.setUserId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional IM.BaseDefine.UserStatType login_stat = 2;
 * @return {!proto.IM.BaseDefine.UserStatType}
 */
proto.IM.Buddy.IMPCLoginStatusNotify.prototype.getLoginStat = function() {
  return /** @type {!proto.IM.BaseDefine.UserStatType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.IM.BaseDefine.UserStatType} value */
proto.IM.Buddy.IMPCLoginStatusNotify.prototype.setLoginStat = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


