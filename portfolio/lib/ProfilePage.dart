import 'package:flutter_web/material.dart';
import 'package:portfolio/responsive_widget.dart';

class ProfilePage  extends StatelessWidget 
{
  const ProfilePage({Key key}) : super (key:key);
  @override
  Widget build(BuildContext context) 
  {
        return ResponsiveWidget
        (
         largeScreen: Scaffold(
           backgroundColor: Colors.black,
           appBar: AppBar(
             elevation: 0.0,
             backgroundColor: Colors.black,
             ) ,
    
             drawer: ResponsiveWidget.isSmallScreen(context)
             ? Drawer(
               child: ListView(
                 padding: const EdgeInsets.all(20),
                 children: <Widget>[],
                 ),
                 )
    
             : null,
    
             body:  SingleChildScrollView(
               child: AnimatedPadding(
                 duration: Duration(seconds: 1),
                 padding: EdgeInsets.all(MediaQuery.of(context).size.height * 0.1),
             ),
         ),
         
         
         ), 

    );
  }
}