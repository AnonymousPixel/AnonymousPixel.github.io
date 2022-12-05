import os,time,winsound,ctypes
for module in ["pyttsx3","psutil"]:
    try:
        exec("import %s"%module)
    except:
        print("Default import of %s failed."%module)
        os.system("pip3 install %s"%module)
        try:
            exec("import %s"%module)
        except:
            print("pip3 install of %s failed. Exiting."%module)
            exit()
lastramstatusnotif=0
lastcpustatusnotif=0
lastsysstatusnotif=time.time()
lastsysrapport=time.time()
lastsyscalc=time.time()
meansysload=0
numdata=0
def tstr():
    if time.localtime()[3]<10:
        h="0%s"%time.localtime()[3]
    else:
        h=time.localtime()[3]
    if time.localtime()[4]<10:
        m="0%s"%time.localtime()[4]
    else:
        m=time.localtime()[4]
    return "%s:%s"%(h,m)
class Alarm:
    def __init__(self,time,text,statement=True):
        self.time = time
        self.text = text
        self.statement=statement
        self.lastwarn=0
    def alarm(self):
        self.lastwarn=time.time()
        engine.say(self.text)
        print("[%s] "%tstr(),self.text)
alarms=[Alarm((18,30),"It is time to lay the table.",time.localtime()[6]!=2),
        Alarm((20,30),"It is time to quit the computer.",time.localtime()[6] not in [4,5]),
        Alarm((21,0),"It is time to quit the computer.",time.localtime()[6]==4),
        Alarm((21,30),"It is time to quit the computer.",time.localtime()[6]==5)]
username=os.getlogin().split(" ")[0]
engine=pyttsx3.init()
engine.setProperty('rate', 180)
def notif_beep(name):
    for x in range(2):
        winsound.Beep(400, 100)
        time.sleep(.05)
engine.connect('started-utterance', notif_beep)
if time.localtime()[3] in range(5,12):
    engine.say("Good Morning, %s!"%username)
    print("Good Morning, %s!"%username)
elif time.localtime()[3] in range(12,17):
    engine.say("Good Afternoon, %s!"%username)
    print("Good Afternoon, %s!"%username)
elif time.localtime()[3] in range(17,21):
    engine.say("Good Evening, %s!"%username)
    print("Good Evening, %s!"%username)
else:
    engine.say("Good Night, %s!"%username)
    print("Good Night, %s!"%username)
while True:
    for alarm in alarms:
        if (time.localtime()[3],time.localtime()[4]) == alarm.time and time.time() - alarm.lastwarn > 120 and alarm.statement:
            alarm.alarm()
    if psutil.virtual_memory().percent > 90 and time.time() - lastramstatusnotif > 60:
        lastramstatusnotif=time.time()
        engine.say("RAM Memory, Critical. %s percent memory in use."%int(psutil.virtual_memory().percent))
        print("[%s] "%tstr(),"RAM Memory, Critical. %s percent memory in use."%int(psutil.virtual_memory().percent))
    if psutil.cpu_percent() > 95 and time.time() - lastcpustatusnotif > 60:
        lastcpustatusnotif=time.time()
        engine.say("CPU Usage, Critical. %s percent in use."%int(psutil.cpu_percent()))
        print("[%s] "%tstr(),"CPU Usage, Critical. %s percent in use."%int(psutil.cpu_percent()))
    tload=(psutil.virtual_memory().percent + psutil.cpu_percent())/2
    if tload > 90 and time.time() - lastsysstatusnotif > 60:
        lastsysstatusnotif=time.time()
        engine.say("System load, Critical. %s percent."%int(tload))
        print("[%s] "%tstr(),"System load, Critical. %s percent."%int(tload))
    if time.time() - lastsyscalc > 60:
        lastsyscalc=time.time()
        meansysload=(meansysload*numdata + tload)/(numdata+1)
        numdata+=1
    if time.time() - lastsysrapport > 3600:
        lastsysrapport=time.time()
        engine.say("Average system load of past hour, %s percent."%int(meansysload))
        print("[%s] "%tstr(),"Average system load of past hour, %s percent."%int(meansysload))
        meansysload=0
        numdata=0   
    engine.runAndWait()