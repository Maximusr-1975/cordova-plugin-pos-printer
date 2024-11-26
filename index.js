class AlphaPrinter {
    constructor(config = {}) {
        this.ip = config.ip || null;
        this.port = config.port || 9100;
    }

    // Convert div to base64 image using html2canvas
    async divToImage(divId) {
        try {
            const div = document.getElementById(divId);
            const canvas = await html2canvas(div);
            return canvas.toDataURL('image/png');
        } catch (error) {
            throw new Error('Failed to convert div to image: ' + error.message);
        }
    }

    // Format TSPL command with image
    formatTSPLWithImage(base64Image) {
        let command = "SIZE 80 mm, 60 mm\n" +
                     "GAP 3 mm, 0 mm\n" +
                     "DIRECTION 1\n" +
                     "CLS\n" +
                     `PUTBMP 0,0,"${base64Image}"\n` +
                     "PRINT 1\n";
        return command;
    }

    // Print function
    async printDiv(divId) {
        try {
            if (!this.ip) {
                throw new Error('Printer IP not configured');
            }

            const base64Image = await this.divToImage(divId);
            const command = this.formatTSPLWithImage(base64Image);
            
            return new Promise((resolve, reject) => {
                const client = new net.Socket();
                
                client.connect(this.port, this.ip, () => {
                    client.write(command);
                    client.end();
                    resolve('Print successful');
                });

                client.on('error', (error) => {
                    reject('Print failed: ' + error.message);
                });
            });
        } catch (error) {
            throw new Error('Print failed: ' + error.message);
        }
    }
}

module.exports = AlphaPrinter;