import CancelIcon from '@/assets/icons/actions/cancel.svg';
import StarIcon from '@/assets/icons/visual/star.svg';
import AuthTitle from "@/components/auth/AuthTitle";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import AppHeader from "@/components/reusable/AppHeader/AppHeader";
import FilterSection from "@/components/reusable/BottomSheet/FilterSection";
import SortBySection from "@/components/reusable/BottomSheet/SortBy";
import ReusableButton from "@/components/reusable/Button/ReusableButton";
import { SansText } from "@/components/reusable/Text/SansText";
import { SatoshiText } from "@/components/reusable/Text/SatoshiText";
import BottomSheetService from "@/redux/features/ui/GlobalSheet/BottomSheetService";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View
} from "react-native";

const astrologers = [
  {
    id: "1",
    name: "Astro Rahul Sharma",
    experience: "12+ yrs exp.",
    rating: 4.8,
    reviews: 12,
    desc: "Best for career guidance today",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "2",
    name: "Astro Kajal Sharma",
    experience: "7+ yrs exp.",
    rating: 4.0,
    reviews: 1,
    desc: "Best for job guidance & finance today",
    image: "https://i.pravatar.cc/150?img=5",
  },
];
type Filters = {
  specialization: string[];
  language: string[];
  ratings: string[];
};

const Astrologer = () => {
  const [sortValue, setSortValue] = useState("relevance");


  const [filters, setFilters] = useState<Filters>({
    specialization: [],
    language: [],
    ratings: [],
  });
  const removeTag = (tag: string) => {
    // If it's sort value
    if (tag === sortValue) {
      setSortValue("relevance");
      return;
    }

    // Otherwise remove from filters
    setFilters((prev) => ({
      specialization: prev.specialization.filter((item) => item !== tag),
      language: prev.language.filter((item) => item !== tag),
      ratings: prev.ratings.filter((item) => item !== tag),
    }));
  };

  const allSelectedTags = [
    ...filters.specialization,
    ...filters.language,
    ...filters.ratings,
  ];

  const displayTags = sortValue !== "relevance"
    ? [sortValue, ...allSelectedTags]
    : allSelectedTags;
  const onSortBy = () => {
    BottomSheetService.open(
      <SortBySection
        onApply={(val) => {
          setSortValue(val);
          console.log("SELECTED:", val);
        }}
      />,
      {
        height: 320,
        hasGradient: true,
      }
    );
  }
  const onFilter = () => {
    BottomSheetService.open(
      <FilterSection
        value={filters}
        onChange={setFilters}
        onApply={(finalFilters) => {
          console.log("FINAL FILTERS:", finalFilters);
          setFilters(finalFilters);
          BottomSheetService.close();
        }}
        onClear={() => {
          setFilters({
            specialization: [],
            language: [],
            ratings: [],
          });
        }}
      />,
      {
        height: 600,
        hasGradient: true,
      }
    );
  }

  return (
    <ScreenWrapper>
      <AppHeader showBack={false}>
        <AuthTitle title="Astrologers">
          <SansText style={{ fontSize: 16 }}>
            Experts available to guide you right now.
          </SansText>
        </AuthTitle>
      </AppHeader>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

          {/* FILTER ROW */}

          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 12,
            marginBottom:12,
          }}>
            <View style={{ flex: 1 }}>
              <ReusableButton
                title="Filter"
                onPress={onFilter}
                variant="solid"
                width="100%"
                iconName="FilterIcon"
                iconPosition="left"
              />
            </View>

            <View style={{ flex: 1 }}>
              <ReusableButton
                title="Sort By"
                onPress={onSortBy}
                variant="ghost"
                width="100%"
                iconName="DashboardCircleIcon"
                iconPosition="left"
              />
            </View>
          </View>

          {/* TAGS */}
          <View style={styles.tagsRow}>
            {displayTags.map((tag) => (
              <View key={tag} style={styles.tag}>
                <SansText style={{ lineHeight: 20, fontSize: 14 }}>
                  {tag}
                </SansText>
                <View style={{ margin: 4 }}>
                  <CancelIcon height={12} width={12} onPress={() => removeTag(tag)} /></View>
              </View>
            ))}
          </View>

          {/* COUNT */}
          <View style={styles.countRow}>
            <View style={styles.dot} />
            <SansText>5 astrologers available</SansText>
          </View>

          {/* LIST */}
          <View style={{ gap: 16 }}>
            {astrologers.map((item) => (
              <AstrologerCard key={item.id} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>

  );
};

export default Astrologer;

const AstrologerCard = ({ item }: any) => {
  return (
    <View style={styles.card}>
      {/* TOP */}
      <View style={styles.cardTop}>
        <Image source={{ uri: item.image }} style={styles.avatar} />

        <View style={{ flex: 1 }}>
          <SatoshiText style={styles.name}>
            {item.name}
          </SatoshiText>

          <SansText style={styles.sub}>
            Vedic astrology • Career & Job
          </SansText>
          <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
            <StarIcon height={24} width={24} />
            <View style={{ flexDirection: "row", gap: 4, alignItems: "baseline" }}><SatoshiText style={styles.rating}> {item.rating} </SatoshiText> <SansText style={{
              color: "#757575", fontSize: 14
            }}>
              ({item.reviews} Reviews)
            </SansText></View>
          </View>


          <SansText style={styles.desc}>
            {item.desc}
          </SansText>
        </View>
      </View>

      {/* BUTTON */}
      <ReusableButton
        onPress={() => { }}
        title="Consult now"
        variant="outline"
        style={{ marginTop: 16, borderRadius: 12 }}
        iconName='ChatIcon'
        iconPosition='left'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  tagsRow: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    marginBottom:12
  },

  tag: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,

  },

  countRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 24
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: "green",
  },

  card: {
    backgroundColor: "#FBF7EB",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#D4AF37",
  },

  cardTop: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center"
  },

  avatar: {
    width: 124,
    height: 124,
    borderRadius: 12,
  },

  name: {
    fontSize: 18,
    lineHeight: 26,
    fontFamily: "SatoshiBold",
    color: "#0D0D0D"
  },

  sub: {
    fontSize: 12,
    color: "#0D0D0D",
    lineHeight: 20
  },

  rating: {
    fontSize: 18,
    marginTop: 4,
    color: "#0D0D0D",
    fontFamily: "SatoshiBold"
  },

  desc: {
    fontSize: 13,
    marginTop: 4,
    color: "#444",
  },
});