/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.IM.Group.IMGroupChangeMemberReq');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.IM.BaseDefine.GroupModifyType');

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
proto.IM.Group.IMGroupChangeMemberReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.IM.Group.IMGroupChangeMemberReq.repeatedFields_, null);
};
goog.inherits(proto.IM.Group.IMGroupChangeMemberReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IM.Group.IMGroupChangeMemberReq.displayName = 'proto.IM.Group.IMGroupChangeMemberReq';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.IM.Group.IMGroupChangeMemberReq.repeatedFields_ = [4];



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
proto.IM.Group.IMGroupChangeMemberReq.prototype.toObject = function(opt_includeInstance) {
  return proto.IM.Group.IMGroupChangeMemberReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IM.Group.IMGroupChangeMemberReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Group.IMGroupChangeMemberReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    changeType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    groupId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    memberIdListList: jspb.Message.getRepeatedField(msg, 4),
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
 * @return {!proto.IM.Group.IMGroupChangeMemberReq}
 */
proto.IM.Group.IMGroupChangeMemberReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IM.Group.IMGroupChangeMemberReq;
  return proto.IM.Group.IMGroupChangeMemberReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IM.Group.IMGroupChangeMemberReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IM.Group.IMGroupChangeMemberReq}
 */
proto.IM.Group.IMGroupChangeMemberReq.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.IM.BaseDefine.GroupModifyType} */ (reader.readEnum());
      msg.setChangeType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGroupId(value);
      break;
    case 4:
      var value = /** @type {!Array.<number>} */ (reader.readPackedUint32());
      msg.setMemberIdListList(value);
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
proto.IM.Group.IMGroupChangeMemberReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IM.Group.IMGroupChangeMemberReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IM.Group.IMGroupChangeMemberReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IM.Group.IMGroupChangeMemberReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getChangeType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getGroupId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getMemberIdListList();
  if (f.length > 0) {
    writer.writePackedUint32(
      4,
      f
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
proto.IM.Group.IMGroupChangeMemberReq.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IM.Group.IMGroupChangeMemberReq.prototype.setUserId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional IM.BaseDefine.GroupModifyType change_type = 2;
 * @return {!proto.IM.BaseDefine.GroupModifyType}
 */
proto.IM.Group.IMGroupChangeMemberReq.prototype.getChangeType = function() {
  return /** @type {!proto.IM.BaseDefine.GroupModifyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.IM.BaseDefine.GroupModifyType} value */
proto.IM.Group.IMGroupChangeMemberReq.prototype.setChangeType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 group_id = 3;
 * @return {number}
 */
proto.IM.Group.IMGroupChangeMemberReq.prototype.getGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.IM.Group.IMGroupChangeMemberReq.prototype.setGroupId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated uint32 member_id_list = 4;
 * @return {!Array.<number>}
 */
proto.IM.Group.IMGroupChangeMemberReq.prototype.getMemberIdListList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array.<number>} value */
proto.IM.Group.IMGroupChangeMemberReq.prototype.setMemberIdListList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.IM.Group.IMGroupChangeMemberReq.prototype.addMemberIdList = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.IM.Group.IMGroupChangeMemberReq.prototype.clearMemberIdListList = function() {
  this.setMemberIdListList([]);
};


/**
 * optional bytes attach_data = 20;
 * @return {string}
 */
proto.IM.Group.IMGroupChangeMemberReq.prototype.getAttachData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * optional bytes attach_data = 20;
 * This is a type-conversion wrapper around `getAttachData()`
 * @return {string}
 */
proto.IM.Group.IMGroupChangeMemberReq.prototype.getAttachData_asB64 = function() {
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
proto.IM.Group.IMGroupChangeMemberReq.prototype.getAttachData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAttachData()));
};


/** @param {!(string|Uint8Array)} value */
proto.IM.Group.IMGroupChangeMemberReq.prototype.setAttachData = function(value) {
  jspb.Message.setProto3BytesField(this, 20, value);
};

