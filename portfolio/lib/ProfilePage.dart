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
             ? Drawer
             (
               child: ListView
                 (
                 padding: const EdgeInsets.all(20),
                 children: <Widget>[],
                 ),
             )
    
             : null,
    
             body:  SingleChildScrollView
             (
               child: AnimatedPadding
               (
                 duration: Duration(seconds: 1),
                 padding: EdgeInsets.all(MediaQuery.of(context).size.height * 0.1),
                 child: ResponsiveWidget
                 (
                   largeScreen: Column
                   (
                   mainAxisAlignment: MainAxisAlignment.start,
                   children: <Widget>
                   [
                    NavHeader(),
                    SizedBox
                      (
                        height: MediaQuery.of(context).size.height * 0.1,
                      ),
                  
                    ProfileInfo(),
                    SizedBox
                      (
                        height: MediaQuery.of(context).size.height * 0.2,
                      ),
                      
                    SocialInfo(),
                   ],
                   ),
                 )
             ),
         ),
         
         
         ), 

    );
  }
}




class NavHeader extends StatelessWidget 
{
  final List<Widget> navButtons;
  const NavHeader({Key key, this.navButtons}) : super(key: key);
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Row(
        mainAxisAlignment: ResponsiveWidget.isSmallScreen(context)
            ? MainAxisAlignment.center
            : MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          PKDot(),//Spacer(),
          if (!ResponsiveWidget.isSmallScreen(context))
            Row(
              children: navButtons,
            )
        ],
      ),
    );
  }
}