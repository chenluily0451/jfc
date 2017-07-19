package com.yimei.jfc.mongo.support;

import org.bson.BsonType;
import org.bson.codecs.BsonTypeClassMap;
import org.bson.codecs.Codec;
import org.bson.codecs.configuration.CodecProvider;
import org.bson.codecs.configuration.CodecRegistry;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by xiangyang on 2017/6/1.
 */
public class LocalDateTimeCodecProvider implements CodecProvider {

//    private final BsonTypeClassMap bsonTypeClassMap;
//
//    public LocalDateTimeCodecProvider(final BsonTypeClassMap bsonTypeClassMap) {
//        this.bsonTypeClassMap = bsonTypeClassMap;
//    }
    Map<BsonType, Class<?>> replacements = new HashMap<BsonType, Class<?>>();
//     replacements.put(BsonType.DATE_TIME, Instant.class);


    @SuppressWarnings("unchecked")
    public <T> Codec<T> get(final Class<T> clazz, final CodecRegistry registry) {
        if (clazz == LocalDateTime.class) {
            return (Codec<T>) (new LocalDateTimeCodec());
        }
        return null;
    }
}
