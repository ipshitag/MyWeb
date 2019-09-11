import 'package:flutter_web/material.dart';
import 'package:portfolio/responsive_widget.dart';
import 'dart:html' as html;

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
                 children: <Widget>
                 [
                   NavButton(
                    text: "about",
                     onPressed: () {
                      html.window.open("https://www.linkedin.com/in/ipshitaghosh13/", "About");
                    },
                  ),
                  NavButton(
                    text: "work",
                      onPressed: () {
                      html.window.open("https://github.com/ipshitag?tab=repositories", "Work");
                          },
                        ),
                  NavButton(
                    text: "contact",
                    onPressed: () {
                    html.window.open("https://www.linkedin.com/in/ipshitaghosh13/detail/contact-info/", "IG");
                    },
                    ),
                  ],
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




class NavHeader extends StatelessWidget {
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
          IGDot(),//Spacer(),
          if (!ResponsiveWidget.isSmallScreen(context))
            Row(
              children: navButtons,
            )
        ],
      ),
    );
  }
}

class IGDot extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        Text(
          "IG",
          textScaleFactor: 2,
          style: TextStyle(
            fontWeight: FontWeight.bold,
          ),
        ),
        SizedBox(
          width: 5,
        ),
        AnimatedContainer(
          duration: Duration(seconds: 1),
          height: 8,
          width: 8,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
          ),
        ),
      ],
    );
  }
}

class NavButton extends StatelessWidget {
    final text;
  final onPressed;
  final Color color;
  const NavButton(
      {Key key,
      @required this.text,
      @required this.onPressed,
      this.color = Colors.blue})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    return OutlineButton(
      child: Text(text),
      borderSide: BorderSide(
        color: color,
      ),
      onPressed: onPressed,
      highlightedBorderColor: color,
    );
  }
}


class ProfileInfo extends StatelessWidget {
  profileImage(context) => Container(
        height: ResponsiveWidget.isSmallScreen(context)
            ? MediaQuery.of(context).size.height * 0.25
            : MediaQuery.of(context).size.width * 0.25,
        width: ResponsiveWidget.isSmallScreen(context)
            ? MediaQuery.of(context).size.height * 0.25
            : MediaQuery.of(context).size.width * 0.25,
        decoration: BoxDecoration(
          backgroundBlendMode: BlendMode.luminosity,
          color: Colors.lightBlueAccent,//            borderRadius: BorderRadius.circular(40),
          shape: BoxShape.circle,
          image: DecorationImage(
            image: AssetImage("ipshitaImage.jpeg"),
            alignment: Alignment.center,
            fit: BoxFit.cover,
          ),
        ),
      );

     final profileData = Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
      Text(
        "Hi there! My name is",
        textScaleFactor: 2,
        style: TextStyle(color: Colors.blue[800]),
      ),
      Text(
        "Ipshita\nGhosh",
        textScaleFactor: 5,
        style: TextStyle(
          color: Colors.white,
          fontWeight: FontWeight.bold,
        ),
      ),
      SizedBox(
        height: 10,
      ),
      Text(
        "A 'developing' developer, who loves to code.\n"
        "I also work hard in keeping my github all green.\n",
        softWrap: true,
        textScaleFactor: 1.5,
        style: TextStyle(color: Colors.white70),
      ),
      SizedBox(
        height: 20,
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          RaisedButton(
            shape: StadiumBorder(),
            child: Text("Resume"),
            color: Colors.red,
            onPressed: () {
              html.window.open("https://docdro.id/ebAmRmR", "IG");
            },
            padding: EdgeInsets.all(10),
          ),
          SizedBox(
            width: 20,
          ),
          OutlineButton(
            borderSide: BorderSide(
              color: Colors.red,
            ),
            shape: StadiumBorder(),
            child: Text("Say Hi!"),
            color: Colors.red,
            onPressed: () {
              html.window.open("mailto:iuippi3@gmail.com", "IG");
            },
            padding: EdgeInsets.all(10),
          )
        ],
      )
    ],
  );


     @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[profileImage(context), profileData],
      ),
      smallScreen: Column(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          profileImage(context),
          SizedBox(
            height: MediaQuery.of(context).size.height * 0.1,
          ),
          profileData
        ],
      ),
    );
  }
}


class SocialInfo extends StatelessWidget {
  List<Widget> socialMediaWidgets() {
    return [
      NavButton(
        text: "Github",
        onPressed: () {
          html.window.open("https://github.com/ipshitag", "Git");
        },
        color: Colors.blue,
      ),
      NavButton(
        text: "LinkedIn",
        onPressed: () {
          html.window.open("https://www.linkedin.com/in/ipshitaghosh13/", "LinkedIn");
        },
        color: Colors.blue,
      ),

      NavButton(
        text: "StackOverflow",
        onPressed: () {
          html.window.open("https://stackoverflow.com/users/story/7449819", "StackOverflow");
        },
        color: Colors.blue,
      ),

      NavButton(
        text: "Techgig",
        onPressed: () {
          html.window.open("https://www.techgig.com/ipshitag", "Techgig");
        },
        color: Colors.blue,
      ),
       
    ];
  }

  Widget copyRightText() => Text(
        "Pawan Kumar ©️2019",
        textAlign: TextAlign.center,
        style: TextStyle(
          color: Colors.grey,
        ),
      );

  @override
  Widget build(BuildContext context) {
    return ResponsiveWidget(
      largeScreen: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: socialMediaWidgets(),
          ),
          copyRightText(),
        ],
      ),
      smallScreen: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          ...socialMediaWidgets(),
          copyRightText(),
        ],
      ),
    );
  }
}
