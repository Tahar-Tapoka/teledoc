import { Text } from "react-native";
import { Controller } from "react-hook-form";
import { ThemeInput, theme } from "../infrastructure/theme";

const CustomInput = ({
  control,
  name,
  rules = {},
  label,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <ThemeInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            label={label}
            secureTextEntry={secureTextEntry}
            style={error && { backgroundColor: theme.colors.error }}
            keyboardType={keyboardType}
          />
          {error && (
            <Text style={{ color: theme.colors.error, alignSelf: "center" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;
