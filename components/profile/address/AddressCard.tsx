import LocationIcon from "@/assets/icons/navigation/location.svg";
import UserInactive from '@/assets/icons/navigation/user-inactive.svg';
import CallIcon from '@/assets/icons/visual/call.svg';
import ReusableButton from "@/components/reusable/Button/ReusableButton";
import { SansText } from "@/components/reusable/Text/SansText";
import { SatoshiText } from "@/components/reusable/Text/SatoshiText";
import { StyleSheet, View } from "react-native";

type Props = {
  data: any;
  onEdit: () => void;
  onDelete: () => void;
};

const AddressCard = ({ data, onEdit, onDelete }: Props) => {
  return (
    <View style={styles.wrapper}>

      {/* Card */}
      <View style={styles.card}>
        <View style={styles.row}>
          <UserInactive width={18} height={24} />
          <SatoshiText style={styles.text}>{data.user.name}</SatoshiText>
        </View>

        <View style={styles.row}>
          <CallIcon width={18} height={24} />
          <SansText style={styles.text}>{data.user.phone}</SansText>
        </View>

        <View style={styles.row}>
          <LocationIcon width={18} height={24} />
          <SansText style={styles.text}>
            {data.location.line1}, {"\n"}
            {data.location.line2}, {data.location.city} - {data.location.pincode}
          </SansText>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionRow}>
        <ReusableButton
          title="Delete"
          variant="outline"
          onPress={onDelete}
          style={{ flex: 1 }}
          borderColor="#C2371E"
          textColor="#C2371E"
          iconName="DeleteIcon"
          iconPosition="left"
        />

        <ReusableButton
          title="Edit"
          variant="solid"
          onPress={onEdit}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({
  wrapper: {
    gap: 12,
  },

  card: {
    backgroundColor: "#FBF7EB",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#D4AF37",
    gap: 12,
  },

  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
  },

  text: {
    fontSize: 18,
    color: "#0D0D0D",
    fontFamily: "SatoshiBold",
    flex: 1,
  },

  actionRow: {
    flexDirection: "row",
    gap: 12,
  },
});