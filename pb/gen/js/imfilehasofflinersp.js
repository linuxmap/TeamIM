/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.File.IMFileHasOfflineRsp');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.IM.BaseDefine.IpAddr');
goog.require('proto.IM.BaseDefine.OfflineFileInfo');


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
proto.IM.File.IMFileHasOfflineRsp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.IM.File.IMFileHasOfflineRsp.repeatedFields_, null);
};
goog.inherits(proto.IM.File.IMFileHasOfflineRsp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.File.IMFileHasOfflineRsp.displayName = 'proto.IM.File.IMFileHasOfflineRsp';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.IM.File.IMFileHasOfflineRsp.repeatedFields_ = [2,3];



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
proto.IM.File.IMFileHasOfflineRsp.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.File.IMFileHasOfflineRsp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.File.IMFileHasOfflineRsp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.File.IMFileHasOfflineRsp.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offlineFileListList: jspb.Message.toObjectList(msg.getOfflineFileListList(),
    proto.IM.BaseDefine.OfflineFileInfo.toObject, includeInstance),
    ipAddrListList: jspb.Message.toObjectList(msg.getIpAddrListList(),
    proto.IM.BaseDefine.IpAddr.toObject, includeInstance),
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
 * @return {!proto.IM.File.IMFileHasOfflineRsp}
 */
proto.IM.File.IMFileHasOfflineRsp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.File.IMFileHasOfflineRsp;
  return proto.IM.File.IMFileHasOfflineRsp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.File.IMFileHasOfflineRsp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.File.IMFileHasOfflineRsp}
 */
proto.IM.File.IMFileHasOfflineRsp.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.IM.BaseDefine.OfflineFileInfo;
      reader.readMessage(value,proto.IM.BaseDefine.OfflineFileInfo.deserializeBinaryFromReader);
      msg.addOfflineFileList(value);
      break;
    case 3:
      var value = new proto.IM.BaseDefine.IpAddr;
      reader.readMessage(value,proto.IM.BaseDefine.IpAddr.deserializeBinaryFromReader);
      msg.addIpAddrList(value);
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
proto.IM.File.IMFileHasOfflineRsp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.File.IMFileHasOfflineRsp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.File.IMFileHasOfflineRsp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.File.IMFileHasOfflineRsp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOfflineFileListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.IM.BaseDefine.OfflineFileInfo.serializeBinaryToWriter
    );
  }
  f = message.getIpAddrListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.IM.BaseDefine.IpAddr.serializeBinaryToWriter
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
proto.IM.File.IMFileHasOfflineRsp.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IM.File.IMFileHasOfflineRsp.prototype.setUserId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated IM.BaseDefine.OfflineFileInfo offline_file_list = 2;
 * @return {!Array.<!proto.IM.BaseDefine.OfflineFileInfo>}
 */
proto.IM.File.IMFileHasOfflineRsp.prototype.getOfflineFileListList = function() {
  return /** @type{!Array.<!proto.IM.BaseDefine.OfflineFileInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.IM.BaseDefine.OfflineFileInfo, 2));
};


/** @param {!Array.<!proto.IM.BaseDefine.OfflineFileInfo>} value */
proto.IM.File.IMFileHasOfflineRsp.prototype.setOfflineFileListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.IM.BaseDefine.OfflineFileInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.IM.BaseDefine.OfflineFileInfo}
 */
proto.IM.File.IMFileHasOfflineRsp.prototype.addOfflineFileList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.IM.BaseDefine.OfflineFileInfo, opt_index);
};


proto.IM.File.IMFileHasOfflineRsp.prototype.clearOfflineFileListList = function() {
  this.setOfflineFileListList([]);
};


/**
 * repeated IM.BaseDefine.IpAddr ip_addr_list = 3;
 * @return {!Array.<!proto.IM.BaseDefine.IpAddr>}
 */
proto.IM.File.IMFileHasOfflineRsp.prototype.getIpAddrListList = function() {
  return /** @type{!Array.<!proto.IM.BaseDefine.IpAddr>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.IM.BaseDefine.IpAddr, 3));
};


/** @param {!Array.<!proto.IM.BaseDefine.IpAddr>} value */
proto.IM.File.IMFileHasOfflineRsp.prototype.setIpAddrListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.IM.BaseDefine.IpAddr=} opt_value
 * @param {number=} opt_index
 * @return {!proto.IM.BaseDefine.IpAddr}
 */
proto.IM.File.IMFileHasOfflineRsp.prototype.addIpAddrList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.IM.BaseDefine.IpAddr, opt_index);
};


proto.IM.File.IMFileHasOfflineRsp.prototype.clearIpAddrListList = function() {
  this.setIpAddrListList([]);
};


/**
 * optional bytes attach_data = 20;
 * @return {string}
 */
proto.IM.File.IMFileHasOfflineRsp.prototype.getAttachData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * optional bytes attach_data = 20;
 * This is a type-conversion wrapper around `getAttachData()`
 * @return {string}
 */
proto.IM.File.IMFileHasOfflineRsp.prototype.getAttachData_asB64 = function() {
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
proto.IM.File.IMFileHasOfflineRsp.prototype.getAttachData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAttachData()));
};


/** @param {!(string|Uint8Array)} value */
proto.IM.File.IMFileHasOfflineRsp.prototype.setAttachData = function(value) {
  jspb.Message.setProto3BytesField(this, 20, value);
};


