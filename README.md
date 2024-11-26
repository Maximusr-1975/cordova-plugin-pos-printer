# Alpha Printer Plugin

A flexible network printer plugin for Alpha Anywhere applications that supports both direct text printing and HTML-to-Image printing using TSPL commands.

## Features

- HTML-to-Image printing support
- Dynamic printer IP configuration
- TSPL command support
- Direct network printing
- No print dialog
- Works with Alpha Anywhere web and mobile apps
- IP validation and error handling
- Connection testing
- Promise-based API

## Installation

```bash
npm install alpha-printer-plugin
```

Or for Cordova/Alpha Anywhere mobile apps:
```bash
cordova plugin add alpha-printer-plugin
```

## Basic Usage

### Initialize Printer

```javascript
const printer = new AlphaPrinter({
    ip: '192.168.1.210',  // Your printer IP
    port: 9100            // Optional, defaults to 9100
});
```

### Print HTML Content

```javascript
// Include html2canvas


// HTML content

    
        Sample Label
    
    
        Product Code: 12345
    


// Print function
async function printLabel() {
    try {
        await printer.printDiv('printContent');
        console.log('Print successful');
    } catch (error) {
        console.error('Print failed:', error);
    }
}
```

### Print Text Content

```javascript
const content = document.getElementById('printContent').innerText;
const command = printer.formatTSPL(content);

printer.print(command)
    .then(() => console.log('Print successful'))
    .catch(error => console.error('Print failed:', error));
```

## Advanced Usage

### Label Example

```html

    
        0300138
    
    
        COLOR:
     
    
        Red
    
    



async function printLabel() {
    const printer = new AlphaPrinter({ ip: '192.168.1.210' });
    try {
        await printer.printDiv('Off_cut_label');
        console.log('Label printed successfully');
    } catch (error) {
        console.error('Print error:', error);
    }
}

```

### Change Printer Settings

```javascript
// Change printer IP
printer.setPrinter('192.168.1.215');

// Change IP and port
printer.setPrinter('192.168.1.215', 9101);
```

### Test Connection

```javascript
printer.testConnection()
    .then(() => console.log('Printer connected'))
    .catch(error => console.error('Connection failed:', error));
```

## API Reference

### Constructor
```javascript
new AlphaPrinter(config?)
```
- `config.ip`: Printer IP address (optional)
- `config.port`: Printer port (optional, default: 9100)

### Methods
- `setPrinter(ip, port?)`: Configure printer connection
- `printDiv(divId)`: Print HTML content as image
- `print(data)`: Send TSPL commands directly
- `formatTSPL(content)`: Format text as TSPL commands
- `testConnection()`: Test printer connection

## Requirements

- Network-enabled POS printer
- Printer must support TSPL commands
- Printer must be on same network
- Port 9100 must be accessible
- html2canvas library for HTML printing

## Supported Printers

- POS-9210
- Other TSPL-compatible printers

## Troubleshooting

### Common Issues

1. Blank Labels
   - Check if HTML content is loaded before printing
   - Verify div dimensions match printer settings
   - Ensure styles are properly applied

2. Connection Issues
   - Verify printer IP address
   - Check network connection
   - Ensure port 9100 is open

3. Image Quality
   - Adjust HTML styles for better printing
   - Check printer DPI settings
   - Verify label dimensions

## License
MIT License

Copyright (c) 2024 Marcin Rodak
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author
Marcin Rodak
Contact: m.rodak75@gmail.com 