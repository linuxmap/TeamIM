// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: IM.SwitchService.proto

package com.mogujie.tt.protobuf;

public final class IMSwitchService {
  private IMSwitchService() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }
  public interface IMP2PCmdMsgOrBuilder extends
      // @@protoc_insertion_point(interface_extends:IM.SwitchService.IMP2PCmdMsg)
      com.google.protobuf.MessageLiteOrBuilder {

    /**
     * <pre>
     *cmd id:		0x0601
     * </pre>
     *
     * <code>uint32 from_user_id = 1;</code>
     */
    int getFromUserId();

    /**
     * <code>uint32 to_user_id = 2;</code>
     */
    int getToUserId();

    /**
     * <code>string cmd_msg_data = 3;</code>
     */
    java.lang.String getCmdMsgData();
    /**
     * <code>string cmd_msg_data = 3;</code>
     */
    com.google.protobuf.ByteString
        getCmdMsgDataBytes();
  }
  /**
   * Protobuf type {@code IM.SwitchService.IMP2PCmdMsg}
   */
  public  static final class IMP2PCmdMsg extends
      com.google.protobuf.GeneratedMessageLite<
          IMP2PCmdMsg, IMP2PCmdMsg.Builder> implements
      // @@protoc_insertion_point(message_implements:IM.SwitchService.IMP2PCmdMsg)
      IMP2PCmdMsgOrBuilder {
    private IMP2PCmdMsg() {
      cmdMsgData_ = "";
    }
    public static final int FROM_USER_ID_FIELD_NUMBER = 1;
    private int fromUserId_;
    /**
     * <pre>
     *cmd id:		0x0601
     * </pre>
     *
     * <code>uint32 from_user_id = 1;</code>
     */
    public int getFromUserId() {
      return fromUserId_;
    }
    /**
     * <pre>
     *cmd id:		0x0601
     * </pre>
     *
     * <code>uint32 from_user_id = 1;</code>
     */
    private void setFromUserId(int value) {
      
      fromUserId_ = value;
    }
    /**
     * <pre>
     *cmd id:		0x0601
     * </pre>
     *
     * <code>uint32 from_user_id = 1;</code>
     */
    private void clearFromUserId() {
      
      fromUserId_ = 0;
    }

    public static final int TO_USER_ID_FIELD_NUMBER = 2;
    private int toUserId_;
    /**
     * <code>uint32 to_user_id = 2;</code>
     */
    public int getToUserId() {
      return toUserId_;
    }
    /**
     * <code>uint32 to_user_id = 2;</code>
     */
    private void setToUserId(int value) {
      
      toUserId_ = value;
    }
    /**
     * <code>uint32 to_user_id = 2;</code>
     */
    private void clearToUserId() {
      
      toUserId_ = 0;
    }

    public static final int CMD_MSG_DATA_FIELD_NUMBER = 3;
    private java.lang.String cmdMsgData_;
    /**
     * <code>string cmd_msg_data = 3;</code>
     */
    public java.lang.String getCmdMsgData() {
      return cmdMsgData_;
    }
    /**
     * <code>string cmd_msg_data = 3;</code>
     */
    public com.google.protobuf.ByteString
        getCmdMsgDataBytes() {
      return com.google.protobuf.ByteString.copyFromUtf8(cmdMsgData_);
    }
    /**
     * <code>string cmd_msg_data = 3;</code>
     */
    private void setCmdMsgData(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      cmdMsgData_ = value;
    }
    /**
     * <code>string cmd_msg_data = 3;</code>
     */
    private void clearCmdMsgData() {
      
      cmdMsgData_ = getDefaultInstance().getCmdMsgData();
    }
    /**
     * <code>string cmd_msg_data = 3;</code>
     */
    private void setCmdMsgDataBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      cmdMsgData_ = value.toStringUtf8();
    }

    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (fromUserId_ != 0) {
        output.writeUInt32(1, fromUserId_);
      }
      if (toUserId_ != 0) {
        output.writeUInt32(2, toUserId_);
      }
      if (!cmdMsgData_.isEmpty()) {
        output.writeString(3, getCmdMsgData());
      }
      unknownFields.writeTo(output);
    }

    public int getSerializedSize() {
      int size = memoizedSerializedSize;
      if (size != -1) return size;

      size = 0;
      if (fromUserId_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeUInt32Size(1, fromUserId_);
      }
      if (toUserId_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeUInt32Size(2, toUserId_);
      }
      if (!cmdMsgData_.isEmpty()) {
        size += com.google.protobuf.CodedOutputStream
          .computeStringSize(3, getCmdMsgData());
      }
      size += unknownFields.getSerializedSize();
      memoizedSerializedSize = size;
      return size;
    }

    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data);
    }
    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data, extensionRegistry);
    }
    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data);
    }
    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data, extensionRegistry);
    }
    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data);
    }
    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, data, extensionRegistry);
    }
    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input);
    }
    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input, extensionRegistry);
    }
    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return parseDelimitedFrom(DEFAULT_INSTANCE, input);
    }
    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return parseDelimitedFrom(DEFAULT_INSTANCE, input, extensionRegistry);
    }
    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input);
    }
    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageLite.parseFrom(
          DEFAULT_INSTANCE, input, extensionRegistry);
    }

    public static Builder newBuilder() {
      return (Builder) DEFAULT_INSTANCE.createBuilder();
    }
    public static Builder newBuilder(com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg prototype) {
      return (Builder) DEFAULT_INSTANCE.createBuilder(prototype);
    }

    /**
     * Protobuf type {@code IM.SwitchService.IMP2PCmdMsg}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageLite.Builder<
          com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg, Builder> implements
        // @@protoc_insertion_point(builder_implements:IM.SwitchService.IMP2PCmdMsg)
        com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsgOrBuilder {
      // Construct using com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg.newBuilder()
      private Builder() {
        super(DEFAULT_INSTANCE);
      }


      /**
       * <pre>
       *cmd id:		0x0601
       * </pre>
       *
       * <code>uint32 from_user_id = 1;</code>
       */
      public int getFromUserId() {
        return instance.getFromUserId();
      }
      /**
       * <pre>
       *cmd id:		0x0601
       * </pre>
       *
       * <code>uint32 from_user_id = 1;</code>
       */
      public Builder setFromUserId(int value) {
        copyOnWrite();
        instance.setFromUserId(value);
        return this;
      }
      /**
       * <pre>
       *cmd id:		0x0601
       * </pre>
       *
       * <code>uint32 from_user_id = 1;</code>
       */
      public Builder clearFromUserId() {
        copyOnWrite();
        instance.clearFromUserId();
        return this;
      }

      /**
       * <code>uint32 to_user_id = 2;</code>
       */
      public int getToUserId() {
        return instance.getToUserId();
      }
      /**
       * <code>uint32 to_user_id = 2;</code>
       */
      public Builder setToUserId(int value) {
        copyOnWrite();
        instance.setToUserId(value);
        return this;
      }
      /**
       * <code>uint32 to_user_id = 2;</code>
       */
      public Builder clearToUserId() {
        copyOnWrite();
        instance.clearToUserId();
        return this;
      }

      /**
       * <code>string cmd_msg_data = 3;</code>
       */
      public java.lang.String getCmdMsgData() {
        return instance.getCmdMsgData();
      }
      /**
       * <code>string cmd_msg_data = 3;</code>
       */
      public com.google.protobuf.ByteString
          getCmdMsgDataBytes() {
        return instance.getCmdMsgDataBytes();
      }
      /**
       * <code>string cmd_msg_data = 3;</code>
       */
      public Builder setCmdMsgData(
          java.lang.String value) {
        copyOnWrite();
        instance.setCmdMsgData(value);
        return this;
      }
      /**
       * <code>string cmd_msg_data = 3;</code>
       */
      public Builder clearCmdMsgData() {
        copyOnWrite();
        instance.clearCmdMsgData();
        return this;
      }
      /**
       * <code>string cmd_msg_data = 3;</code>
       */
      public Builder setCmdMsgDataBytes(
          com.google.protobuf.ByteString value) {
        copyOnWrite();
        instance.setCmdMsgDataBytes(value);
        return this;
      }

      // @@protoc_insertion_point(builder_scope:IM.SwitchService.IMP2PCmdMsg)
    }
    @java.lang.SuppressWarnings({"unchecked", "fallthrough"})
    protected final java.lang.Object dynamicMethod(
        com.google.protobuf.GeneratedMessageLite.MethodToInvoke method,
        java.lang.Object arg0, java.lang.Object arg1) {
      switch (method) {
        case NEW_MUTABLE_INSTANCE: {
          return new com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg();
        }
        case IS_INITIALIZED: {
          return DEFAULT_INSTANCE;
        }
        case MAKE_IMMUTABLE: {
          return null;
        }
        case NEW_BUILDER: {
          return new Builder();
        }
        case VISIT: {
          Visitor visitor = (Visitor) arg0;
          com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg other = (com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg) arg1;
          fromUserId_ = visitor.visitInt(fromUserId_ != 0, fromUserId_,
              other.fromUserId_ != 0, other.fromUserId_);
          toUserId_ = visitor.visitInt(toUserId_ != 0, toUserId_,
              other.toUserId_ != 0, other.toUserId_);
          cmdMsgData_ = visitor.visitString(!cmdMsgData_.isEmpty(), cmdMsgData_,
              !other.cmdMsgData_.isEmpty(), other.cmdMsgData_);
          if (visitor == com.google.protobuf.GeneratedMessageLite.MergeFromVisitor
              .INSTANCE) {
          }
          return this;
        }
        case MERGE_FROM_STREAM: {
          com.google.protobuf.CodedInputStream input =
              (com.google.protobuf.CodedInputStream) arg0;
          com.google.protobuf.ExtensionRegistryLite extensionRegistry =
              (com.google.protobuf.ExtensionRegistryLite) arg1;
          if (extensionRegistry == null) {
            throw new java.lang.NullPointerException();
          }
          try {
            boolean done = false;
            while (!done) {
              int tag = input.readTag();
              switch (tag) {
                case 0:
                  done = true;
                  break;
                default: {
                  if (!parseUnknownField(tag, input)) {
                    done = true;
                  }
                  break;
                }
                case 8: {

                  fromUserId_ = input.readUInt32();
                  break;
                }
                case 16: {

                  toUserId_ = input.readUInt32();
                  break;
                }
                case 26: {
                  java.lang.String s = input.readStringRequireUtf8();

                  cmdMsgData_ = s;
                  break;
                }
              }
            }
          } catch (com.google.protobuf.InvalidProtocolBufferException e) {
            throw new RuntimeException(e.setUnfinishedMessage(this));
          } catch (java.io.IOException e) {
            throw new RuntimeException(
                new com.google.protobuf.InvalidProtocolBufferException(
                    e.getMessage()).setUnfinishedMessage(this));
          } finally {
          }
        }
        // fall through
        case GET_DEFAULT_INSTANCE: {
          return DEFAULT_INSTANCE;
        }
        case GET_PARSER: {
          if (PARSER == null) {    synchronized (com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg.class) {
              if (PARSER == null) {
                PARSER = new DefaultInstanceBasedParser(DEFAULT_INSTANCE);
              }
            }
          }
          return PARSER;
      }
      case GET_MEMOIZED_IS_INITIALIZED: {
        return (byte) 1;
      }
      case SET_MEMOIZED_IS_INITIALIZED: {
        return null;
      }
      }
      throw new UnsupportedOperationException();
    }


    // @@protoc_insertion_point(class_scope:IM.SwitchService.IMP2PCmdMsg)
    private static final com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new IMP2PCmdMsg();
      DEFAULT_INSTANCE.makeImmutable();
    }

    public static com.mogujie.tt.protobuf.IMSwitchService.IMP2PCmdMsg getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static volatile com.google.protobuf.Parser<IMP2PCmdMsg> PARSER;

    public static com.google.protobuf.Parser<IMP2PCmdMsg> parser() {
      return DEFAULT_INSTANCE.getParserForType();
    }
  }


  static {
  }

  // @@protoc_insertion_point(outer_class_scope)
}
