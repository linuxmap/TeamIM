/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.Buddy.IMAllUserRsp');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.IM.BaseDefine.UserInfo');


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
proto.IM.Buddy.IMAllUserRsp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.IM.Buddy.IMAllUserRsp.repeatedFields_, null);
};
goog.inherits(proto.IM.Buddy.IMAllUserRsp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.Buddy.IMAllUserRsp.displayName = 'proto.IM.Buddy.IMAllUserRsp';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.IM.Buddy.IMAllUserRsp.repeatedFields_ = [3];



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
proto.IM.Buddy.IMAllUserRsp.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.Buddy.IMAllUserRsp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.Buddy.IMAllUserRsp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Buddy.IMAllUserRsp.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    latestUpdateTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userListList: jspb.Message.toObjectList(msg.getUserListList(),
    proto.IM.BaseDefine.UserInfo.toObject, includeInstance),
    attachData: msg.getAttachData_asB64()
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
 * @return {!proto.IM.Buddy.IMAllUserRsp}
 */
proto.IM.Buddy.IMAllUserRsp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.Buddy.IMAllUserRsp;
  return proto.IM.Buddy.IMAllUserRsp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.Buddy.IMAllUserRsp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.Buddy.IMAllUserRsp}
 */
proto.IM.Buddy.IMAllUserRsp.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLatestUpdateTime(value);
      break;
    case 3:
      var value = new proto.IM.BaseDefine.UserInfo;
      reader.readMessage(value,proto.IM.BaseDefine.UserInfo.deserializeBinaryFromReader);
      msg.addUserList(value);
      break;
    case 20:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAttachData(value);
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
proto.IM.Buddy.IMAllUserRsp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.Buddy.IMAllUserRsp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.Buddy.IMAllUserRsp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Buddy.IMAllUserRsp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLatestUpdateTime();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getUserListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.IM.BaseDefine.UserInfo.serializeBinaryToWriter
    );
  }
  f = message.getAttachData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      20,
      f
    );
  }
};


/**
 * optional uint32 user_id = 1;
 * @return {number}
 */
proto.IM.Buddy.IMAllUserRsp.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IM.Buddy.IMAllUserRsp.prototype.setUserId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 latest_update_time = 2;
 * @return {number}
 */
proto.IM.Buddy.IMAllUserRsp.prototype.getLatestUpdateTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.IM.Buddy.IMAllUserRsp.prototype.setLatestUpdateTime = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated IM.BaseDefine.UserInfo user_list = 3;
 * @return {!Array.<!proto.IM.BaseDefine.UserInfo>}
 */
proto.IM.Buddy.IMAllUserRsp.prototype.getUserListList = function() {
  return /** @type{!Array.<!proto.IM.BaseDefine.UserInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.IM.BaseDefine.UserInfo, 3));
};


/** @param {!Array.<!proto.IM.BaseDefine.UserInfo>} value */
proto.IM.Buddy.IMAllUserRsp.prototype.setUserListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.IM.BaseDefine.UserInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.IM.BaseDefine.UserInfo}
 */
proto.IM.Buddy.IMAllUserRsp.prototype.addUserList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.IM.BaseDefine.UserInfo, opt_index);
};


proto.IM.Buddy.IMAllUserRsp.prototype.clearUserListList = function() {
  this.setUserListList([]);
};


/**
 * optional bytes attach_data = 20;
 * @return {string}
 */
proto.IM.Buddy.IMAllUserRsp.prototype.getAttachData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * optional bytes attach_data = 20;
 * This is a type-conversion wrapper around `getAttachData()`
 * @return {string}
 */
proto.IM.Buddy.IMAllUserRsp.prototype.getAttachData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAttachData()));
};


/**
 * optional bytes attach_data = 20;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAttachData()`
 * @return {!Uint8Array}
 */
proto.IM.Buddy.IMAllUserRsp.prototype.getAttachData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAttachData()));
};


/** @param {!(string|Uint8Array)} value */
proto.IM.Buddy.IMAllUserRsp.prototype.setAttachData = function(value) {
  jspb.Message.setProto3BytesField(this, 20, value);
};


