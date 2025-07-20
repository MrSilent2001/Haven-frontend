import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, Entypo } from '@expo/vector-icons';
import theme from '../../styles/theme';

const ProfileTab: React.FC = () => {
  const navigation = useNavigation<any>();
  const [isEditMode, setIsEditMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [profileData, setProfileData] = useState({
    name: 'Stephanie Johnson',
    email: 'stephanie@gmail.com',
    phone: '0712345678',
    city: 'Colombo',
  });

  const handleChange = (field: keyof typeof profileData, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogout = () => {
    setShowMenu(false);
    navigation.navigate('Home');
  };

  const handleClose = () => {
    setShowMenu(false);
    const parentNav = navigation.getParent();
    parentNav?.navigate('Tabs' as any, {
      screen: 'HomeTab',
      params: { screen: 'Dashboard' }
    });
  };

  const toggleEditMode = () => {
    setIsEditMode(true);
    setShowMenu(false);
  };

  const handleSave = () => {
    setIsEditMode(false);
    // You can call an API here to persist changes if needed
  };

  return (
      <SafeAreaView style={styles.container}>
        {/* Menu Button */}
        <TouchableOpacity style={styles.menuIcon} onPress={() => setShowMenu(true)}>
          <Entypo name="dots-three-vertical" size={20} color={theme.colors.text} />
        </TouchableOpacity>

        {/* Menu Dropdown */}
        <Modal visible={showMenu} transparent animationType="fade">
          <Pressable style={styles.menuOverlay} onPress={() => setShowMenu(false)}>
            <View style={styles.dropdownMenu}>
              <TouchableOpacity onPress={toggleEditMode}>
                <Text style={styles.dropdownItem}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.dropdownItem}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleClose}>
                <Text style={styles.dropdownItem}>Close</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>

        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image
                source={{ uri: 'https://i.pravatar.cc/300?img=10' }}
                style={styles.avatar}
            />
            {isEditMode && (
                <TouchableOpacity style={styles.editIcon}>
                  <Feather name="camera" size={18} color="#fff" />
                </TouchableOpacity>
            )}
          </View>

          {/* TextInputs always shown, editable only in edit mode */}
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor={theme.colors.secondary_text}
              value={profileData.name}
              onChangeText={text => handleChange('name', text)}
              editable={isEditMode}
          />

          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={theme.colors.secondary_text}
              value={profileData.email}
              onChangeText={text => handleChange('email', text)}
              editable={isEditMode}
          />

          <Text style={styles.inputLabel}>Contact No.</Text>
          <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor={theme.colors.secondary_text}
              value={profileData.phone}
              onChangeText={text => handleChange('phone', text)}
              editable={isEditMode}
              keyboardType="phone-pad"
          />

          <Text style={styles.inputLabel}>City</Text>
          <TextInput
              style={styles.input}
              placeholder="City"
              placeholderTextColor={theme.colors.secondary_text}
              value={profileData.city}
              onChangeText={text => handleChange('city', text)}
              editable={isEditMode}
          />
        </View>

        {isEditMode && (
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        )}
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    marginTop:40
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: theme.colors.primary,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: theme.colors.secondary_text,
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.surface,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: 12,
    fontWeight: '500',
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
  },
  menuOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 50,
    paddingRight: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  dropdownMenu: {
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 8,
    fontSize: 16,
    color: theme.colors.text,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: theme.colors.primary,
    padding: 6,
    borderRadius: 20,
  },
  inputLabel: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
    marginTop: 12,
  },
  input: {
    width: '80%',
    fontSize: 16,
    marginVertical: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 6,
    color: theme.colors.text,
    backgroundColor: theme.colors.surface,
  },
  saveButton: {
    width: '80%',
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default ProfileTab;
