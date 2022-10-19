import { ScrollView, View,Text,TouchableOpacity,TextInput, Image, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import styles from "./StyleDrawerChat";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function DrawerChat(){
    const [isBFF,setIsBFF] = useState(false);
    return(
        <SafeAreaView style={styles.container} >
            <View style={styles.containerTabBar}>
                    <TouchableOpacity style={{  paddingLeft:10,paddingRight:10,width:"15%"}} >
                        <Ionicons name="arrow-back" size={36} color="#fff" />
                    </TouchableOpacity>
                    <View style={{width:"70%",justifyContent:'center',alignItems:'center',}}>
                        <Text style={{fontSize:24,color:'white',}}>Tuỳ chọn</Text>
                    </View>
            </View>
           
            <ScrollView style={{paddingBottom: 600}}>
                <View style={styles.containerBody}>
                    <View style={styles.containerBody_Top}>
                        <Image style={styles.containerBody_Top_Avt}source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}}/>
                        <Text style={{fontSize:30,fontWeight:'bold',color:'white',marginTop:10,}}>Trần Tấn Phước</Text>
                        <View style={styles.containerBody_Top_Icon}>
                            <TouchableOpacity style={styles.containerBody_Top_Icon_Icon}>
                                <View style={styles.containerBody_Top_Icon_IconItem}>
                                    <Ionicons name="search" size={20} color="white" />
                                </View>
                                <View style={styles.containerBody_Top_Icon_IconText}>
                                <Text style={{color:'white',textAlign:'center'}}>Tìm {'\n'} tin nhắn</Text>
                                </View>     
                            </TouchableOpacity>  
                            <TouchableOpacity style={styles.containerBody_Top_Icon_Icon}>
                                <View style={styles.containerBody_Top_Icon_IconItem}>
                                    <AntDesign name="user" size={20} color="white" />
                                </View>
                                <View style={styles.containerBody_Top_Icon_IconText}>
                                <Text style={{color:'white',textAlign:'center'}}>Trang {'\n'} cá nhân</Text>
                                </View>     
                            </TouchableOpacity>  
                            <TouchableOpacity style={styles.containerBody_Top_Icon_Icon}>
                                <View style={styles.containerBody_Top_Icon_IconItem}>
                                    <FontAwesome5 name="brush" size={20} color="white" />
                                </View>
                                <View style={styles.containerBody_Top_Icon_IconText}>
                                <Text style={{color:'white',textAlign:'center'}}>Đổi {'\n'} hình nền</Text>
                                </View>     
                            </TouchableOpacity>  
                            <TouchableOpacity style={styles.containerBody_Top_Icon_Icon}>
                                <View style={styles.containerBody_Top_Icon_IconItem}>
                                    <AntDesign name="bells" size={20} color="white" />
                                </View>
                                <View style={styles.containerBody_Top_Icon_IconText}>
                                <Text style={{color:'white',textAlign:'center'}}>Tắt {'\n'} thông báo</Text>
                                </View>     
                            </TouchableOpacity>  
                        </View>
                    </View>
                    <View style={styles.containerBody_Mid}>
                            <View style={styles.containerBody_Mid_ChangeName}>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                    <Ionicons name="pencil" size={24} color="white"  style={{width:"15%",height:"100%"}} />
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'white',}}>Đổi tên gợi nhớ</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.containerBody_Mid_ChangeName_Item}>
                                    <MaterialCommunityIcons name="star-outline" size={30} color="white"style={{width:"15%",height:"100%"}} />
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'white',}}>Đánh dấu bạn thân</Text>
                                        <Switch style={{marginRight:10,marginBottom:15,}} value = {isBFF} onValueChange={(value)=>{
                                            setIsBFF(value) }} />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                    <AntDesign name="clockcircleo" size={24} color="white" style={{width:"15%",height:"100%"}}/>
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'white',}}>Nhật kí chung</Text>
                                        <AntDesign name="right" size={15} color="grey" style={{paddingRight:10,paddingTop:5,}} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.containerBody_Mid_File} >
                            <TouchableOpacity style={styles.containerBody_Mid_File_Item}>
                                        <Ionicons name="ios-folder-outline" size={24} color="white" style={{width:"15%",height:"100%"}} />
                                        <View style={styles.containerBody_Mid_File_Item_Text}>
                                            <Text style={{fontSize:20,color:'white',}}>Ảnh, file , link đã gửi</Text>
                                            <AntDesign name="right" size={15} color="grey" style={{paddingRight:10,}} />
                                        </View>
                            </TouchableOpacity>
                            <View style={styles.containerBody_Mid_File_Item}>
                                        <View style={{width:"15%",height:"100%"}} />
                                        <View style={styles.containerBody_Mid_File_Item_Img}>
                                            <TouchableOpacity>
                                            <Image style={styles.fileImg}source={{ uri: 'https://st.quantrimang.com/photos/image/2021/05/21/AVT-Doi11-1.jpg'}}/>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                            <Image style={styles.fileImg}source={{ uri: 'https://st.quantrimang.com/photos/image/2021/05/21/AVT-Doi14-2.jpg'}}/>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                            <Image style={styles.fileImg}source={{ uri: 'https://i.pinimg.com/736x/a6/2c/c3/a62cc3642d8da0c8202c968d266ec96f.jpg'}}/>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                            <Image style={styles.fileImg}source={{ uri: 'https://i.pinimg.com/736x/1c/26/e2/1c26e224c5af80ac5decff6af5080efb.jpg'}}/>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <View style={styles.fileImg_View}>
                                                    <Feather name="arrow-right" size={24} color="white" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                            </View>
                        </View>
                        <View style={styles.containerBody_Mid_Group}>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                <MaterialIcons name="groups" size={24} color="white"  style={{width:"15%",height:"100%"}} />
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'white',}}>Tạo nhóm với Phước</Text>
                                        <AntDesign name="right" size={15} color="grey" style={{paddingRight:10,paddingTop:5,}} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                <AntDesign name="addusergroup" size={24} color="white" style={{width:"15%",height:"100%"}} />
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'white',}}>Thêm Phước vào nhóm</Text>
                                        <AntDesign name="right" size={15} color="grey" style={{paddingRight:10,paddingTop:5,}} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                <MaterialIcons name="group" size={24} color="white" style={{width:"15%",height:"100%"}} />
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'white',}}>Xem nhóm chung</Text>
                                        <AntDesign name="right" size={15} color="grey" style={{paddingRight:10,paddingTop:5,}} />
                                    </View>
                                </TouchableOpacity>
                        </View>
                        {/* Funtion */}
                        <View style={styles.containerBody_Mid_Funtion}>
                                <View style={styles.containerBody_Mid_ChangeName_Item}>
                                    <AntDesign name="pushpino" size={24} color="white" style={{width:"15%",height:"100%"}}/>
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'white',}}>Ghim trò chuyện</Text>
                                        <Switch style={{marginRight:10,marginBottom:15,}} value = {isBFF} onValueChange={(value)=>{
                                            setIsBFF(value) }} />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                <AntDesign name="filter" size={24} color="white" style={{width:"15%",height:"100%"}}/>
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <View style={{marginBottom:15,}}>
                                            <Text style={{fontSize:20,color:'white',}}>Phân loại</Text>
                                            <Text style={{fontSize:16,color:'grey',}}>Ưu tiên</Text>
                                        </View>
                                        <AntDesign name="right" size={15} color="grey" style={{paddingRight:10,paddingTop:5,}} />
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.containerBody_Mid_ChangeName_Item}>
                                    <Entypo name="eye-with-line" size={24} color="white"  style={{width:"15%",height:"100%"}}/>
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'white',}}>Ẩn trò chuyện</Text>
                                        <Switch style={{marginRight:10,marginBottom:15,}} value = {isBFF} onValueChange={(value)=>{
                                            setIsBFF(value) }} />
                                    </View>
                                </View>
                                <View style={styles.containerBody_Mid_ChangeName_Item}>
                                    <Feather name="phone-incoming" size={24} color="white" style={{width:"15%",height:"100%"}}/>
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'white',}}>Báo cuộc gọi đến</Text>
                                        <Switch style={{marginRight:10,marginBottom:15,}} value = {isBFF} onValueChange={(value)=>{
                                            setIsBFF(value) }} />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                    <FontAwesome5 name="users-cog" size={24} color="white" style={{width:"15%",height:"100%"}}/>
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                            <Text style={{fontSize:20,color:'white',}}>Cài đặt cá nhân</Text>
                                        <AntDesign name="right" size={15} color="grey" style={{paddingRight:10,paddingTop:5,}} />
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.containerBody_Mid_ChangeName_Item}>
                                <MaterialIcons name="lock-clock" size={24} color="white" style={{width:"15%",height:"100%"}}/>
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <View style={{marginBottom:15,}}>
                                            <Text style={{fontSize:20,color:'white',}}>Tin nhắn tự xóa</Text>
                                            <Text style={{fontSize:16,color:'grey',}}>Không tự xóa</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {/* Report */}
                            <View style={styles.containerBody_Mid_Report}>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                    <MaterialIcons name="report-problem" size={24} color="white" style={{width:"15%",height:"100%"}}/>
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                        <Text style={{fontSize:20,color:'white',}}>Báo xấu</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                <Entypo name="block" size={24} color="white" style={{width:"15%",height:"100%"}}/>
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                            <Text style={{fontSize:20,color:'white',}}>Chặn tin nhắn</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.containerBody_Mid_ChangeName_Item}>
                                    <MaterialIcons name="delete" size={24} color="white"  style={{width:"15%",height:"100%"}}/>
                                    <View style={styles.containerBody_Mid_ChangeName_Item_Text}>
                                            <Text style={{fontSize:20,color:'white',}}>Xóa cuộc trò chuyện</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                    </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default DrawerChat;