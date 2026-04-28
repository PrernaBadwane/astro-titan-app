import StarIcon from '@/assets/icons/visual/star.svg';
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SansText } from "../Text/SansText";
import { SatoshiText } from "../Text/SatoshiText";

type Props = {
  name: string;
  experience: string;
  description: string;
  tags: string[];
  rating: number;
  image: any;
};

const ExpertCard = ({
  name,
  experience,
  description,
  tags,
  rating,
  image,
}: Props) => {
  return (
    <View style={styles.card}>
      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <Image source={image} style={styles.avatar} />

        {/* Rating Badge */}
        <View style={styles.ratingBadge}>
          <StarIcon height={10} width={10}/><SansText style={styles.ratingText}> {rating}</SansText>
        </View>
      </View>

      {/* Content */}
      <View style={{ alignItems: "center", gap: 4 }}>
        <SatoshiText style={styles.name}>{name}</SatoshiText>

        <SansText style={styles.exp}>{experience}</SansText>

        <SansText style={styles.desc}>{description}</SansText>

        <SansText style={styles.tags}>
          {tags.map((t) => `• ${t}`).join("  ")}
        </SansText>
      </View>
    </View>
  );
};

export default ExpertCard;

const styles = StyleSheet.create({
  card: {
    width: 140,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D4AF37",
    backgroundColor: "#FBF7EB",
    paddingVertical: 20, // ✅ internal padding only
    alignItems: "center",
  },

  avatarWrapper: {
    position: "relative",
    marginBottom: 8,
  },

  avatar: {
    width: 84,
    height: 84,
    borderRadius: 100,
  },

  ratingBadge: {
    position: "absolute",
    bottom: -8,
    alignSelf: "center",
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 28,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:4
  },

  ratingText: {
    color: "#F5F5F5",
    fontSize: 12,
  },

  name: {
    fontSize: 18,
    fontFamily:"SatoshiBold",
    color: "#4A4A4A",
  },

  exp: {
    fontSize: 14,
    color: "#4A4A4A",
    letterSpacing:0.28
  },

  desc: {
    fontSize: 12,
    color: "#4A4A4A",
    textAlign: "center",
    letterSpacing:0.38
  },

  tags: {
    fontSize: 12,
    color: "#4A4A4A",
    textAlign: "center",
    letterSpacing:0.38
  },
});