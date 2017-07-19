package com.yimei.jfc.mongo.support;

import org.bson.BsonReader;
import org.bson.BsonWriter;
import org.bson.codecs.Codec;
import org.bson.codecs.DecoderContext;
import org.bson.codecs.EncoderContext;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Created by xiangyang on 2017/6/1.
 */
public class LocalDateTimeCodec implements Codec<LocalDateTime> {


    protected DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    @Override
    public LocalDateTime decode(final BsonReader reader, final DecoderContext decoderContext) {
        return LocalDateTime.now();
    }


    @Override
    public void encode(BsonWriter writer, LocalDateTime value, EncoderContext encoderContext) {
        writer.writeString(value.format(formatter));

    }

    @Override
    public Class<LocalDateTime> getEncoderClass() {
        return LocalDateTime.class;
    }


}
