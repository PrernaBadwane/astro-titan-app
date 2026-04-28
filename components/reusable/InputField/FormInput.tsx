import { Controller } from "react-hook-form";
import { View } from "react-native";
import AppInput from "./AppInput";

export default function FormInput({ control, name, rules, ...rest }: any) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <View>
          <AppInput
            {...rest}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            error={fieldState.error?.message}
          />
        </View>
      )}
    />
  );
}
